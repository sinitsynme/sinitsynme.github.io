function SimpleSlider(sliderId) {
    const slider = document.getElementById(sliderId) || document.querySelector('.sim-slider');
    if (!slider) return;
  
    const sldrList = slider.querySelector('.sim-slider-list');
    const sldrElements = sldrList.querySelectorAll('.sim-slider-element');
    const leftArrow = slider.querySelector('.sim-slider-arrow-left');
    const rightArrow = slider.querySelector('.sim-slider-arrow-right');
    const indicatorDots = slider.querySelector('.sim-slider-dots');
  
    const defaults = {
      loop: true,
      auto: true,
      interval: 5000,
      arrows: true,
      dots: true,
    };
  
    let currentElement = 0;
    let autoScroll;
    let bgTime = getTime();
  
    function getTime() {
      return new Date().getTime();
    }
  
    function setAutoScroll() {
      autoScroll = setInterval(() => {
        const fnTime = getTime();
        if (fnTime - bgTime + 10 > defaults.interval) {
          bgTime = fnTime;
          elemNext();
        }
      }, defaults.interval);
    }
  
    function elemPrev(num = 1) {
      const prevElement = currentElement;
      currentElement -= num;
      if (currentElement < 0) currentElement = sldrElements.length - 1;
  
      if (!defaults.loop) {
        if (currentElement === 0) {
          leftArrow.style.display = 'none';
        }
        rightArrow.style.display = 'block';
      }
  
      sldrElements[currentElement].style.opacity = '1';
      sldrElements[prevElement].style.opacity = '0';
  
      if (defaults.dots) {
        dotOn(prevElement);
        dotOff(currentElement);
      }
    }
  
    function elemNext(num = 1) {
      const prevElement = currentElement;
      currentElement += num;
      if (currentElement >= sldrElements.length) currentElement = 0;
  
      if (!defaults.loop) {
        if (currentElement === sldrElements.length - 1) {
          rightArrow.style.display = 'none';
        }
        leftArrow.style.display = 'block';
      }
  
      sldrElements[currentElement].style.opacity = '1';
      sldrElements[prevElement].style.opacity = '0';
  
      if (defaults.dots) {
        dotOn(prevElement);
        dotOff(currentElement);
      }
    }
  
    function dotOn(num) {
      indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;';
    }
  
    function dotOff(num) {
      indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;';
    }
  
    if (sldrElements.length <= 1) {
      defaults.auto = false;
      defaults.arrows = false;
      defaults.dots = false;
      leftArrow.style.display = 'none';
      rightArrow.style.display = 'none';
    }
  
    sldrElements[0].style.opacity = '1';
  
    if (!defaults.loop) {
      leftArrow.style.display = 'none';
      defaults.auto = false;
    } else if (defaults.auto) {
      setAutoScroll();
  
      sldrList.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
      }, false);
  
      sldrList.addEventListener('mouseleave', setAutoScroll, false);
    }
  
    if (defaults.arrows) {
      leftArrow.addEventListener('click', () => {
        const fnTime = getTime();
        if (fnTime - bgTime > 1000) {
          bgTime = fnTime;
          elemPrev();
        }
      }, false);
  
      rightArrow.addEventListener('click', () => {
        const fnTime = getTime();
        if (fnTime - bgTime > 1000) {
          bgTime = fnTime;
          elemNext();
        }
      }, false);
    } else {
      leftArrow.style.display = 'none';
      rightArrow.style.display = 'none';
    }
  
    if (defaults.dots) {
      let sum = '';
      let diffNum;
  
      for (let i = 0; i < sldrElements.length; i++) {
        sum += '<span class="sim-dot"></span>';
      }
  
      indicatorDots.innerHTML = sum;
      indicatorDotsAll = slider.querySelectorAll('span.sim-dot');
  
      for (let n = 0; n < sldrElements.length; n++) {
        indicatorDotsAll[n].addEventListener('click', () => {
          diffNum = Math.abs(n - currentElement);
          if (n < currentElement) {
            bgTime = getTime();
            elemPrev(diffNum);
          } else if (n > currentElement) {
            bgTime = getTime();
            elemNext(diffNum);
          }
        }, false);
      }
  
      dotOff(0);
      for (let i = 1; i < sldrElements.length; i++) {
        dotOn(i);
      }
    }
  }
  
  new SimpleSlider();
  