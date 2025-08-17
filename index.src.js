(() => {
  // Check if this is the first time using the script
  const isFirstTime = localStorage.getItem('beaxt_telegram_visited') === null;
  
  // Check if password is already saved
  const savedPassword = localStorage.getItem('beaxt_saved_password') === 'MRBEAXT';

  // Show the password protected popup
  const showPopup = () => {
    // Create popup container
    const popup = document.createElement('div');
    popup.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      font-family: 'Arial', sans-serif;
    `;
    
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
      background: #1a1a2e;
      padding: 30px;
      border-radius: 15px;
      text-align: center;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      position: relative;
      overflow: hidden;
    `;
    
    // Add RGB border animation
    const rgbBorder = document.createElement('div');
    rgbBorder.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #ff0000, #ff7700, #ffdd00, #00ff00, #0000ff, #ff00ff);
      background-size: 400% 400%;
      animation: rgbBorder 3s ease infinite;
    `;
    
    // Add Telegram logo
    const telegramLogo = document.createElement('img');
    telegramLogo.src = 'https://i.ibb.co/7dd8hK7K/telegram-logo.png';
    telegramLogo.style.cssText = `
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto 15px;
      border: 3px solid #0088cc;
      box-shadow: 0 0 20px rgba(0,136,204,0.5);
    `;
    
    // Add title
    const title = document.createElement('h2');
    title.textContent = 'MR BEAXT';
    title.style.cssText = `
      color: #fff;
      margin-top: 0;
      font-size: 28px;
      text-shadow: 0 0 10px rgba(255,255,255,0.3);
      margin-bottom: 20px;
    `;
    
    // Add message
    const message = document.createElement('p');
    message.textContent = 'Join our Telegram channel to get updates and support:';
    message.style.cssText = `
      color: #ccc;
      margin-bottom: 25px;
      line-height: 1.5;
    `;
    
    // Add Telegram button
    const telegramBtn = document.createElement('a');
    telegramBtn.href = 'https://t.me/binarybeaxt_official';
    telegramBtn.target = '_blank';
    telegramBtn.textContent = 'Join Telegram Channel';
    telegramBtn.style.cssText = `
      display: inline-block;
      background: #0088cc;
      color: white;
      padding: 12px 20px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      margin-bottom: 15px;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,136,204,0.4);
    `;
    telegramBtn.onmouseenter = () => {
      telegramBtn.style.transform = 'scale(1.05)';
      telegramBtn.style.boxShadow = '0 7px 20px rgba(0,136,204,0.6)';
    };
    telegramBtn.onmouseleave = () => {
      telegramBtn.style.transform = 'scale(1)';
      telegramBtn.style.boxShadow = '0 5px 15px rgba(0,136,204,0.4)';
    };
    
    // Add instruction text below Telegram button
    const instructionText = document.createElement('p');
    instructionText.textContent = 'Join the Telegram channel to get the password';
    instructionText.style.cssText = `
      color: #888;
      font-size: 14px;
      margin-bottom: 25px;
    `;
    
    // Add password input
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Enter password to continue...';
    passwordInput.style.cssText = `
      width: 100%;
      padding: 12px 15px;
      margin-bottom: 15px;
      border: 2px solid #333;
      border-radius: 8px;
      background: #16213e;
      color: white;
      font-size: 16px;
      outline: none;
      transition: all 0.3s ease;
    `;
    
    // Auto-fill password if previously saved
    if (savedPassword) {
      passwordInput.value = 'MRBEAXT';
    }
    
    passwordInput.onfocus = () => {
      passwordInput.style.borderColor = '#0088cc';
      passwordInput.style.boxShadow = '0 0 10px rgba(0,136,204,0.5)';
    };
    passwordInput.onblur = () => {
      passwordInput.style.borderColor = '#333';
      passwordInput.style.boxShadow = 'none';
    };
    
    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.textContent = savedPassword ? 'Continue' : 'Submit';
    submitBtn.style.cssText = `
      background: linear-gradient(45deg, #0faf59, #08c);
      color: white;
      border: none;
      padding: 12px 25px;
      border-radius: 50px;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(15,175,89,0.4);
    `;
    submitBtn.onmouseenter = () => {
      submitBtn.style.transform = 'scale(1.05)';
      submitBtn.style.boxShadow = '0 7px 20px rgba(15,175,89,0.6)';
    };
    submitBtn.onmouseleave = () => {
      submitBtn.style.transform = 'scale(1)';
      submitBtn.style.boxShadow = '0 5px 15px rgba(15,175,89,0.4)';
    };
    
    // Add error message
    const errorMsg = document.createElement('div');
    errorMsg.style.cssText = `
      color: #ff4444;
      margin-top: 15px;
      height: 20px;
      font-size: 14px;
    `;
    
    // Add remember me checkbox
    const rememberContainer = document.createElement('div');
    rememberContainer.style.cssText = `
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      justify-content: center;
    `;
    
    const rememberCheckbox = document.createElement('input');
    rememberCheckbox.type = 'checkbox';
    rememberCheckbox.id = 'rememberPassword';
    rememberCheckbox.style.cssText = `
      margin-right: 8px;
      cursor: pointer;
    `;
    
    const rememberLabel = document.createElement('label');
    rememberLabel.htmlFor = 'rememberPassword';
    rememberLabel.textContent = 'Remember password';
    rememberLabel.style.cssText = `
      color: #aaa;
      font-size: 14px;
      cursor: pointer;
    `;
    
    rememberContainer.appendChild(rememberCheckbox);
    rememberContainer.appendChild(rememberLabel);
    
    // Check if password is already saved
    if (savedPassword) {
      rememberCheckbox.checked = true;
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rgbBorder {
        0% { background-position: 0% 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0% 50% }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      @keyframes floatMessage {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-30px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    // Add pulse animation to logo
    telegramLogo.style.animation = 'pulse 2s infinite';
    title.style.animation = 'fadeIn 0.8s ease forwards';
    popupContent.style.animation = 'fadeIn 0.5s ease forwards';
    
    // Assemble popup
    popupContent.appendChild(rgbBorder);
    popupContent.appendChild(telegramLogo);
    popupContent.appendChild(title);
    popupContent.appendChild(message);
    popupContent.appendChild(telegramBtn);
    popupContent.appendChild(instructionText);
    popupContent.appendChild(passwordInput);
    
    // Only show remember checkbox if password isn't already saved
    if (!savedPassword) {
      popupContent.appendChild(rememberContainer);
    }
    
    popupContent.appendChild(submitBtn);
    popupContent.appendChild(errorMsg);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
    
    // Show "Free from MR BEAXT" message
    const showFreeMessage = () => {
      const freeMsg = document.createElement('div');
      freeMsg.textContent = 'Free from MR BEAXT';
      freeMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(15, 175, 89, 0.9);
        color: white;
        padding: 15px 30px;
        border-radius: 8px;
        z-index: 10000;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 0 5px 20px rgba(0,0,0,0.5);
        animation: floatMessage 3s ease forwards;
      `;
      document.body.appendChild(freeMsg);
      
      setTimeout(() => {
        freeMsg.remove();
      }, 3000);
    };
    
    // Handle password submission
    submitBtn.onclick = () => {
      if (passwordInput.value === 'MRBEAXT') {
        // Save password if remember checkbox is checked
        if (rememberCheckbox.checked && !savedPassword) {
          localStorage.setItem('beaxt_saved_password', 'MRBEAXT');
        }
        
        showFreeMessage();
        
        setTimeout(() => {
          popup.style.animation = 'fadeOut 0.5s ease forwards';
          setTimeout(() => {
            popup.remove();
            executeMainCode();
          }, 500);
        }, 1000);
      } else {
        errorMsg.textContent = 'Incorrect password! Please try again.';
        passwordInput.style.borderColor = '#ff4444';
        passwordInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
          passwordInput.style.animation = '';
        }, 500);
      }
    };
    
    // Allow pressing Enter to submit
    passwordInput.onkeypress = (e) => {
      if (e.key === 'Enter') {
        submitBtn.click();
      }
    };
    
    // Automatically open Telegram on first visit
    if (isFirstTime) {
      localStorage.setItem('beaxt_telegram_visited', 'true');
      setTimeout(() => {
        window.open('https://t.me/binarybeaxt_official', '_blank');
      }, 1500);
    }
  };
  
  // Main code to execute after password is entered
  const executeMainCode = () => {
    // 1. Change page title
    document.title = "Live trading | Quotex";

    // 2. Change URL to market-qx.pro and replace demo-trade with trade
    const lang = window.location.pathname.split('/')[1] || '';
    const newUrl = `/${lang}/trade`;
    history.pushState({}, "", newUrl);

    // 3. Remove banner section if exists
    const banner = document.querySelector('.header__banner');
    if (banner) {
      banner.remove();
      console.log('Banner removed successfully.');
    } else {
      console.log('Banner not found.');
    }

    // 4. Change "Demo Account" text to "Live Account" / "Live"
    const nameEl = document.querySelector('.---react-features-Usermenu-styles-module__infoName--SfrTV.---react-features-Usermenu-styles-module__demo--TmWTp');
    if (nameEl) {
      nameEl.textContent = window.innerWidth <= 768 ? 'Live' : 'Live Account';
      nameEl.style.color = '#0faf59';
    }

    // 5. Force icon to standard
    const iconEl = document.querySelector('.---react-features-Usermenu-styles-module__infoLevels--ePf8T svg');
    if (iconEl) {
      iconEl.setAttribute('class', 'icon-profile-level-standart');
      iconEl.querySelector('use')?.setAttribute('xlink:href', '/profile/images/spritemap.svg#icon-profile-level-standart');
    }
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.textContent = 'Script activated successfully!';
    successMsg.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #0faf59;
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      z-index: 9999;
      box-shadow: 0 5px 15px rgba(15,175,89,0.5);
      animation: fadeIn 0.5s ease forwards;
    `;
    document.body.appendChild(successMsg);
    setTimeout(() => {
      successMsg.style.animation = 'fadeOut 0.5s ease forwards';
      setTimeout(() => successMsg.remove(), 500);
    }, 3000);
  };
  
  // Show the popup when script runs
  showPopup();
})();
