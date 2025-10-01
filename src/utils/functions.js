// JavaScript functions from the original template
export const notificationAction = () => {
  const notificationBox = document.getElementById('notification-box');
  const notiOutside = document.getElementById('noti-outside');
  
  if (notificationBox && notiOutside) {
    if (notificationBox.classList.contains('hidden')) {
      notificationBox.classList.remove('hidden');
      notiOutside.classList.remove('hidden');
    } else {
      notificationBox.classList.add('hidden');
      notiOutside.classList.add('hidden');
    }
  }
};

export const messageAction = () => {
  const messageBox = document.getElementById('message-box');
  const mesOutside = document.getElementById('mes-outside');
  
  if (messageBox && mesOutside) {
    if (messageBox.classList.contains('hidden')) {
      messageBox.classList.remove('hidden');
      mesOutside.classList.remove('hidden');
    } else {
      messageBox.classList.add('hidden');
      mesOutside.classList.add('hidden');
    }
  }
};

export const storeAction = () => {
  const storeBox = document.getElementById('store-box');
  const storeOutside = document.getElementById('store-outside');
  
  if (storeBox && storeOutside) {
    if (storeBox.classList.contains('hidden')) {
      storeBox.classList.remove('hidden');
      storeOutside.classList.remove('hidden');
    } else {
      storeBox.classList.add('hidden');
      storeOutside.classList.add('hidden');
    }
  }
};

export const profileAction = () => {
  const profileBox = document.querySelector('.profile-box');
  const profileOutside = document.querySelector('.profile-outside');
  
  if (profileBox && profileOutside) {
    if (profileBox.classList.contains('hidden')) {
      profileBox.classList.remove('hidden');
      profileOutside.classList.remove('hidden');
    } else {
      profileBox.classList.add('hidden');
      profileOutside.classList.add('hidden');
    }
  }
};

// Close dropdowns when clicking outside
export const setupDropdowns = () => {
  // Notification dropdown
  const notiOutside = document.getElementById('noti-outside');
  if (notiOutside) {
    notiOutside.addEventListener('click', () => {
      const notificationBox = document.getElementById('notification-box');
      if (notificationBox) {
        notificationBox.classList.add('hidden');
        notiOutside.classList.add('hidden');
      }
    });
  }

  // Message dropdown
  const mesOutside = document.getElementById('mes-outside');
  if (mesOutside) {
    mesOutside.addEventListener('click', () => {
      const messageBox = document.getElementById('message-box');
      if (messageBox) {
        messageBox.classList.add('hidden');
        mesOutside.classList.add('hidden');
      }
    });
  }

  // Store dropdown
  const storeOutside = document.getElementById('store-outside');
  if (storeOutside) {
    storeOutside.addEventListener('click', () => {
      const storeBox = document.getElementById('store-box');
      if (storeBox) {
        storeBox.classList.add('hidden');
        storeOutside.classList.add('hidden');
      }
    });
  }

  // Profile dropdown
  const profileOutside = document.querySelector('.profile-outside');
  if (profileOutside) {
    profileOutside.addEventListener('click', () => {
      const profileBox = document.querySelector('.profile-box');
      if (profileBox) {
        profileBox.classList.add('hidden');
        profileOutside.classList.add('hidden');
      }
    });
  }
};

// Initialize Quill editor if it exists
export const initializeQuill = () => {
  const editorOne = document.querySelector('#editor');
  const editorTwo = document.querySelector('#editor2');
  
  if (editorOne || editorTwo) {
    const toolbarOptions = [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['link', 'image', 'video']
    ];

    if (editorOne) {
      new Quill(editorOne, {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions
        }
      });
    }

    if (editorTwo) {
      new Quill(editorTwo, {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions
        }
      });
    }
  }
};

// Initialize AOS (Animate On Scroll)
export const initializeAOS = () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
};

// Initialize Slick slider
export const initializeSlick = () => {
  if (typeof $ !== 'undefined' && $.fn.slick) {
    $('.slick-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  }
};

// Initialize Flatpickr
export const initializeFlatpickr = () => {
  if (typeof flatpickr !== 'undefined') {
    flatpickr('.flatpickr', {
      dateFormat: 'Y-m-d',
      allowInput: true
    });
  }
};

// Initialize Chart.js
export const initializeCharts = () => {
  if (typeof Chart !== 'undefined') {
    // Chart initialization code can be added here
    console.log('Chart.js is available');
  }
};

// Initialize all components
export const initializeAll = () => {
  setupDropdowns();
  initializeQuill();
  initializeAOS();
  initializeSlick();
  initializeFlatpickr();
  initializeCharts();
};
