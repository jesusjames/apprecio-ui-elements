let timer;

export const slideUp = (ele, duration = 500, onClosing = () => {}, onClosed = () => {}) => {
  onClosing(true);
  const element = ele;
  element.style.transition = `height ${duration}ms ease-in-out`;
  element.style.overflow = 'hidden';
  element.style.height = 0;

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  timer = setTimeout(() => {
    element.style.display = 'none';
    onClosed(true);
  }, duration);
};

export const slideDown = (ele, duration = 500, onOpening = () => {}, onOpened = () => {}) => {
  onOpening(true);
  const element = ele;
  element.style.display = 'block';
  const height = element.children[0].offsetHeight;
  element.style.height = `${height}px`;

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  timer = setTimeout(() => {
    element.style.overflow = 'visible';
    onOpened(true);
  }, duration);
};

export const slideToggle = (element, duration = 500, ...restArgs) => {
  if (getComputedStyle(element).overflow === 'hidden') {
    slideDown(element, duration, restArgs[2], restArgs[3]);
  } else {
    slideUp(element, duration, restArgs[0], restArgs[1]);
  }
};
