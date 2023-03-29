// @ts-nocheck
import { useRef, useState, useEffect, useCallback } from "react";
import Tweezer from "../assets/tweezer.js";

interface UseScrollSnapOptions {
  ref?: React.RefObject<HTMLElement>;
  duration?: number;
  delay?: number;
}

function useScrollSnap({
  ref = null,
  duration = 100,
  delay = 0,
}: UseScrollSnapOptions) {
  const isActiveInteractionRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const currentScrollOffsetRef = useRef<number | null>(null);
  const targetScrollOffsetRef = useRef<number | null>(null);
  const animationRef = useRef<Tweezer | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const tickAnimation = useCallback((value: number) => {
    if (!targetScrollOffsetRef.current || !currentScrollOffsetRef.current)
      return;
    const scrollTopDelta =
      Number(targetScrollOffsetRef.current) -
      Number(currentScrollOffsetRef.current);
    const scrollTop =
      Number(currentScrollOffsetRef.current) + (scrollTopDelta * value) / 10000;
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  }, []);

  const resetAnimation = useCallback(() => {
    currentScrollOffsetRef.current = window.pageYOffset;
    targetScrollOffsetRef.current = null;
    animationRef.current = null;
  }, []);

  const endAnimation = useCallback(() => {
    if (!animationRef.current) return;
    animationRef.current.stop();
    resetAnimation();
  }, [resetAnimation]);

  const getElementsInView = useCallback(() => {
    const elements = [].slice.call(
      ref.current?.children ?? [] // convert HTMLCollection to native JS Array
    ) as HTMLElement[];
    return elements.filter((element) => {
      const { top, height } = element.getBoundingClientRect();
      return (
        top > 0 && top < window.innerHeight && top + height < window.innerHeight
      );
    });
  }, [ref]);

  const getTargetScrollOffset = useCallback((element: HTMLElement) => {
    const { top } = element.getBoundingClientRect();
    // add offset with half of the element size to center it
    return window.pageYOffset + top - (window.innerHeight - element.clientHeight) / 2;
  }, []);

  const snapToTarget = useCallback(
    (target: HTMLElement) => {
      if (animationRef.current) {
        animationRef.current.stop();
      }

      const elements = [].slice.call(
        ref.current?.children ?? [] // convert HTMLCollection to native JS Array
      ) as HTMLElement[];
      const index = elements.indexOf(target);
      if (index === -1) return;

      setScrollIndex(index);
      targetScrollOffsetRef.current = getTargetScrollOffset(target);
      animationRef.current = new Tweezer({
        start: 0,
        end: 10000,
        duration: duration,
      });

      animationRef.current.on("tick", tickAnimation);
      animationRef.current.on("done", resetAnimation);

      animationRef.current.begin();
    },
    [ref, duration, getTargetScrollOffset, tickAnimation, resetAnimation]
  );

  const findSnapTarget = useCallback(() => {
    const deltaY = window.pageYOffset - (currentScrollOffsetRef.current ?? 0);
    currentScrollOffsetRef.current = window.pageYOffset;

    const elementsInView = getElementsInView();
    console.log(elementsInView.length, 'elementsInView')
    if (!elementsInView || elementsInView.length === 0) return;

    if (deltaY > 0) {
      snapToTarget(elementsInView[elementsInView.length - 1]);
    } else {
      snapToTarget(elementsInView[0]);
    }
  }, [getElementsInView, snapToTarget]);

  const onInteractionStart = useCallback(() => {
    endAnimation();
    isActiveInteractionRef.current = true;
  }, [endAnimation]);

  const onInteractionEnd = useCallback(() => {
    isActiveInteractionRef.current = false;
    findSnapTarget();
  }, [findSnapTarget]);

  const onInteraction = useCallback(() => {
    endAnimation();
    if (scrollTimeoutRef) clearTimeout(scrollTimeoutRef.current);
    if (isActiveInteractionRef.current || animationRef.current) return;

    scrollTimeoutRef.current = setTimeout(findSnapTarget, 500);
  }, [endAnimation, findSnapTarget]);

  useEffect(() => {
    if (ref) {
      resetAnimation();

      document.addEventListener("keydown", onInteractionStart, {
        passive: true,
      });
      document.addEventListener("keyup", onInteractionEnd, { passive: true });
      document.addEventListener("touchstart", onInteractionStart, {
        passive: true,
      });
      document.addEventListener("touchend", onInteractionEnd, {
        passive: true,
      });
      document.addEventListener("wheel", onInteraction, { passive: true });

      findSnapTarget();

      return () => {
        endAnimation();

        document.removeEventListener("keydown", onInteractionStart, {
          passive: true,
        });
        document.removeEventListener("keyup", onInteractionEnd, {
          passive: true,
        });
        document.removeEventListener("touchstart", onInteractionStart, {
          passive: true,
        });
        document.removeEventListener("touchend", onInteractionEnd, {
          passive: true,
        });
        document.removeEventListener("wheel", onInteraction, { passive: true });
      };
    }
  }, [
    ref,
    resetAnimation,
    findSnapTarget,
    endAnimation,
    onInteractionStart,
    onInteractionEnd,
    onInteraction,
  ]);

  return scrollIndex;
}

export default useScrollSnap;
