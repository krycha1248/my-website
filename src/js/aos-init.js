import AOS from 'aos';
import 'aos/dist/aos.css';

window.addEventListener('load', () => {
  AOS.init({
    once: false,
    duration: 800,
    easing: 'ease-out-cubic'
  });

  setTimeout(() => {
    AOS.refresh();
  }, 100);
});