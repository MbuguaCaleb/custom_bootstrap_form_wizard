$(function () {
  const first_name = document.getElementById('first_name');
  const last_name = document.getElementById('last_name');
  const phone_no = document.getElementById('phone_no');
  const email_address = document.getElementById('email_address');
  const country_code = document.getElementById('country_code');
  const otp_password = document.getElementById('otp_password');

  //Step One
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const confirm_password = document.getElementById('confirm_password');

  //Step Two Validations
  const id_passport_no = document.getElementById('id_passport_no');
  const saluatation = document.getElementById('saluatation');
  const about_us = document.getElementById('where_did_you_hear_about_us');
  const first_name_step_two = document.getElementById('first_name_field');
  const middle_name = document.getElementById('middle_name');
  const country_of_residence = document.getElementById('country_of_residence');
  const nationality = document.getElementById('nationality');
  const surname = document.getElementById('surname');
  const email_address_field = document.getElementById('email_address_field');
  const road_house_no = document.getElementById('road_house_no');
  const tax_exempt_true = document.getElementById('tax_exempt_true');
  const tax_exempt_false = document.getElementById('tax_exempt_false');
  const agree_to_terms = document.getElementById('agree_to_terms');
  const country_code_field = document.getElementById('country_code_field');
  const tax_no = document.getElementById('tax_no');
  const phone_no_field = document.getElementById('phone_no_field');
  const initial_deposit = document.getElementById('initial_deposit');
  const monthly_contribution_true = document.getElementById(
    'monthly_contribution_true'
  );
  const monthly_contribution_false = document.getElementById(
    'monthly_contribution_false'
  );
  const gender = document.getElementById('gender');
  const marital_status = document.getElementById('marital_status');
  const date_of_birth = document.getElementById('date_of_birth');
  const sms_notifications_true = document.getElementById(
    'sms_notifications_true'
  );
  const sms_notifications_false = document.getElementById(
    'sms_notifications_false'
  );
  const source_of_funds = document.getElementById('source_of_funds');
  const interest_accrued = document.getElementById('interest_accrued');
  const occupation = document.getElementById('occupation');
  const employer = document.getElementById('employer');
  const account_no = document.getElementById('account_no');
  const account_name = document.getElementById('account_name');
  const bank = document.getElementById('bank');
  const bank_branch = document.getElementById('bank_branch');
  //Resusable Validations Functions

  //Show Input Error Message
  function showError(input, message) {
    //assign the Error Class
    //Remember the concept of Parent and Siblings
    input.className = 'custom-select is-invalid';
    const formGroup = input.parentElement;
    console.log(formGroup);
    const errorMessage = formGroup.querySelector('small');
    console.log(errorMessage);
    errorMessage.innerText = message;
  }
  //Show Success Outline
  function showSuccess(input) {
    input.className = 'custom-select is-valid';
  }

  function showErrorCheckBoxAndInputs(input, message) {
    if (input.id == 'agree_to_terms') {
      input.className = 'form-check-input is-invalid';
      const OptionOrCheckBox = input.parentElement;

      //i am using a div instead of small
      const errorMessage = OptionOrCheckBox.querySelector('#invalidFeedback');
      errorMessage.innerText = message;

      //Adding error class to the description
      const addErrorClass = OptionOrCheckBox.querySelector('#customHighlight');
      addErrorClass.className = 'invalid-feedback';
    } else if (
      input.id == 'tax_exempt_true' ||
      input.id == 'tax_exempt_false'
    ) {
      input.className = 'form-check-input is-invalid';
      $('#invalidFeedbackRadioTaxExempt').removeClass('invisible');
    } else if (
      input.id == 'sms_notifications_true' ||
      input.id == 'sms_notifications_false'
    ) {
      input.className = 'form-check-input is-invalid';
      $('#invalidFeedbackSMSNotifications').removeClass('invisible');
    } else {
      input.className = 'form-check-input is-invalid';
      $('#invalidFeedbackRadioMonthlyContribution').removeClass('invisible');
    }
  }

  function showSuccessCheckBoxAndInputs(input) {
    if (input.id == 'agree_to_terms') {
      input.className = 'form-check-input is-valid';
      //Adding error class to the description
      const OptionOrCheckBox = input.parentElement;

      const addSuccessClass = OptionOrCheckBox.querySelector(
        '#customHighlight'
      );
      addSuccessClass.className = 'valid-feedback';
    } else if (
      input.id == 'tax_exempt_true' ||
      input.id == 'tax_exempt_false'
    ) {
      input.className = 'form-check-input is-valid';
      $('#invalidFeedbackRadioTaxExempt').addClass('invisible');
    } else if (
      input.id == 'sms_notifications_true' ||
      input.id == 'sms_notifications_false'
    ) {
      input.className = 'form-check-input is-valid';
      $('#invalidFeedbackSMSNotifications').addClass('invisible');
    } else {
      input.className = 'form-check-input is-valid';
      $('#invalidFeedbackRadioMonthlyContribution').addClass('invisible');
    }
  }

  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  //Call Welcome Modal
  $('#welcomeModal').modal('show');

  // Select Dropdown
  $('html').on('click', function () {
    $('.select .dropdown').hide();
  });
  $('.select').on('click', function (event) {
    event.stopPropagation();
  });
  $('.select .select-control').on('click', function () {
    $(this).parent().next().toggle();
  });
  $('.select .dropdown li').on('click', function () {
    $(this).parent().toggle();
    var text = $(this).attr('rel');
    $(this).parent().prev().find('div').text(text);
  });

  // date picker
  $('.datepicker').datepicker({
    clearBtn: true,
    format: 'dd/mm/yyyy',
  });

  $('.step-box-content ').on('click', function () {
    $('.step-box-content').removeClass('active');
    $(this).addClass('active');
  });

  $('.services-select-option li').on('click', function () {
    $('.services-select-option li').removeClass('active');
    $(this).addClass('active');
  });

  $('.opti-list ul li').on('click', function (e) {
    $(this)
      .find('input[type=checkbox]')
      .prop('checked', !$(this).find('input[type=checkbox]').prop('checked'));

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  $('input[type=checkbox]').click(function (e) {
    e.stopPropagation();
    return true;
  });

  $('.plan-icon-text').on('click', function () {
    $(this).find('input[type=radio]').prop('checked', true);
    $('.plan-icon-text').removeClass('active');
    $(this).addClass('active');
  });

  //multi form ===================================
  //DOM elements
  const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next',
  };

  //remove class from a set of items
  const removeClasses = (elemSet, className) => {
    elemSet.forEach((elem) => {
      elem.classList.remove(className);
    });
  };

  //return exect parent node of the element
  const findParent = (elem, parentClass) => {
    let currentNode = elem;

    while (!currentNode.classList.contains(parentClass)) {
      currentNode = currentNode.parentNode;
    }

    return currentNode;
  };

  //get active button step number
  const getActiveStep = (elem) => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };

  //set all steps before clicked (and clicked too) to active
  const setActiveStep = (activeStepNum) => {
    //remove active state from all the state
    removeClasses(DOMstrings.stepsBtns, 'js-active');
    removeClasses(DOMstrings.stepsBtns, 'current');

    //set picked items to active
    DOMstrings.stepsBtns.forEach((elem, index) => {
      if (index <= activeStepNum) {
        elem.classList.add('js-active');
        $(elem).addClass(index);
      }

      if (index == activeStepNum) {
        elem.classList.add('current');
      }
    });
  };

  //get active panel
  const getActivePanel = () => {
    let activePanel;

    DOMstrings.stepFormPanels.forEach((elem) => {
      if (elem.classList.contains('js-active')) {
        activePanel = elem;
      }
    });

    return activePanel;
  };

  //open active panel (and close unactive panels)
  const setActivePanel = (activePanelNum) => {
    const animation = $(DOMstrings.stepFormPanels, 'js-active').attr(
      'data-animation'
    );

    //remove active class from all the panels
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
    removeClasses(DOMstrings.stepFormPanels, animation);
    removeClasses(DOMstrings.stepFormPanels, 'animate__animated');

    //show active panel
    DOMstrings.stepFormPanels.forEach((elem, index) => {
      if (index === activePanelNum) {
        elem.classList.add('js-active');
        // stepFormPanels
        elem.classList.add('animate__animated', animation);

        setTimeout(function () {
          removeClasses(
            DOMstrings.stepFormPanels,
            'animate__animated',
            animation
          );
        }, 1200);

        setFormHeight(elem);
      }
    });
  };

  //set form height equal to current panel height
  const formHeight = (activePanel) => {
    const activePanelHeight = activePanel.offsetHeight;

    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
  };

  const setFormHeight = () => {
    const activePanel = getActivePanel();

    formHeight(activePanel);
  };

  //STEPS BAR CLICK FUNCTION
  DOMstrings.stepsBar.addEventListener('click', (e) => {
    //check if click target is a step button
    const eventTarget = e.target;

    if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
      return;
    }

    //get active button step number
    const activeStep = getActiveStep(eventTarget);

    //set all steps before clicked (and clicked too) to active
    // setActiveStep(activeStep);

    //open active panel
    // setActivePanel(activeStep);
  });

  //PREV/NEXT BTNS CLICK
  DOMstrings.stepsForm.addEventListener('click', (e) => {
    const eventTarget = e.target;

    //check if we clicked on `PREV` or NEXT` buttons
    if (
      !(
        eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) ||
        eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)
      )
    ) {
      return;
    }

    //find active panel
    const activePanel = findParent(
      eventTarget,
      `${DOMstrings.stepFormPanelClass}`
    );

    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(
      activePanel
    );

    //set active step and active panel onclick
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      activePanelNum--;

      setActiveStep(activePanelNum);
      setActivePanel(activePanelNum);
    } else if (
      eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)
    ) {
      var form = $('#wizard');
      form.validate();

      var next_step = true;

      //Check required Fields
      function checkRequired(input) {
        if (input.value.trim() === '') {
          next_step = false;
          showError(input, `${getFieldName(input)} is required`);
          return next_step;
        } else {
          next_step = true;
          showSuccess(input);
          return next_step;
        }
      }

      //check Passwords Match
      function checkPasswordsMatch(input1, input2) {
        if (input1.value !== input2.value) {
          showError(input2, 'Passwords do not match');
          next_step = false;
          return next_step;
        } else {
          next_step = true;
          return next_step;
        }
      }
      //check email is valid
      function checkEmail(input) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //test is a JavaScript Function
        if (re.test(input.value.trim())) {
          showSuccess(input);
          next_step = true;
          return next_step;
        } else {
          showError(input, 'Email is not Valid');
          next_step = false;
          return next_step;
        }
      }

      //ValidateFields
      const validateFields = (fieldsArray) => {
        if (fieldsArray.includes(false)) {
          next_step = false;
          return next_step;
        } else {
          next_step = true;
          return next_step;
        }
      };

      const validateRadioButtons = (radioButtonsArray) => {
        if (radioButtonsArray.includes(false)) {
          next_step = false;
          return next_step;
        } else {
          next_step = true;
          return next_step;
        }
      };

      //Ensure that at least one of the Options Is True
      const validateOptionRadioButtonFields = (input1, input2) => {
        if (input1.checked == false && input2.checked == false) {
          next_step = false;
          showErrorCheckBoxAndInputs(
            input1,
            `${getFieldName(input1)} is required`
          );
          showErrorCheckBoxAndInputs(
            input2,
            `${getFieldName(input2)} is required`
          );
          return next_step;
        } else {
          next_step = true;
          showSuccessCheckBoxAndInputs(input1);
          showSuccessCheckBoxAndInputs(input2);
          return next_step;
        }
      };

      const validateCheckBoxFields = (input) => {
        if (input.checked == false) {
          next_step = false;
          showErrorCheckBoxAndInputs(
            input,
            `${getFieldName(input)} is required`
          );
          return next_step;
        } else {
          next_step = true;
          showSuccessCheckBoxAndInputs(input);
          return next_step;
        }
      };

      //Loading the Otp Modal
      if (activePanelNum == 0) {
        //Validation before going to the next step
        countryCodeValid = checkRequired(country_code);
        firstNameValid = checkRequired(first_name);
        lastNameValid = checkRequired(last_name);
        phoneNoValid = checkRequired(phone_no);
        emailAddressValid = checkEmail(email_address);

        const stepOneValidationsArray = [];

        stepOneValidationsArray.push(
          countryCodeValid,
          firstNameValid,
          lastNameValid,
          phoneNoValid,
          emailAddressValid
        );

        //Only Proceed to the next step when all the Validations Pass
        const next_step = validateFields(stepOneValidationsArray);

        if (next_step === true) {
          activePanelNum++;
          setActiveStep(activePanelNum);
          setActivePanel(activePanelNum);
        }
      } else if (activePanelNum == 1) {
        usernameValidation = checkRequired(username);
        passwordValidation = checkRequired(password);
        confirmPasswordValidation = checkPasswordsMatch(
          password,
          confirm_password
        );

        const stepTwoValidationsArray = [];

        stepTwoValidationsArray.push(
          usernameValidation,
          passwordValidation,
          confirmPasswordValidation
        );

        const next_step = validateFields(stepTwoValidationsArray);

        if (next_step === true) {
          //Call Endpoint to generate Otp
          //Do checks to find whether the account is already active
          //async await
          $('#Otp').modal('show');
          //Validate Otp
          $('#validateOTP').click((e) => {
            e.preventDefault();

            otpCheckRequired = checkRequired(otp_password);

            if (otpCheckRequired === false) {
              $('#Otp').modal('show');
            } else {
              alert('call endpoint to valiate otp');
              $('#Otp').modal('hide');
            }
          });

          activePanelNum++;
          setActiveStep(activePanelNum);
          setActivePanel(activePanelNum);
        }
      } else if (activePanelNum == 2) {
        idPassPortNoValidation = checkRequired(id_passport_no);
        saluatationValidation = checkRequired(saluatation);
        hearAboutUsValidation = checkRequired(about_us);
        firstNameStepTwoValidation = checkRequired(first_name_step_two);
        middleNameValidation = checkRequired(middle_name);
        countryOfResidenceValidation = checkRequired(country_of_residence);
        nationalityValidation = checkRequired(nationality);
        surnameValidation = checkRequired(surname);
        emailAddressStepTwoValidation = checkRequired(email_address_field);
        roadHouseNoValidation = checkRequired(road_house_no);
        countryCodeStepTwoValidation = checkRequired(country_code_field);
        taxNoValidation = checkRequired(tax_no);
        phoneNOStepTwoValidation = checkRequired(phone_no_field);
        initialDepositValidation = checkRequired(initial_deposit);
        genderValidation = checkRequired(gender);
        maritalStatusValidation = checkRequired(marital_status);
        dateOfBirthValidation = checkRequired(date_of_birth);
        sourceOfFundsValidation = checkRequired(source_of_funds);
        interestAccruedValidation = checkRequired(interest_accrued);
        occupationValidation = checkRequired(occupation);
        employerValidation = checkRequired(employer);
        accountNoValidation = checkRequired(account_no);
        accountNameValidation = checkRequired(account_name);
        bankValidation = checkRequired(bank);
        bankBranchValidation = checkRequired(bank_branch);

        //Radio Buttons Validations
        taxExemptValidation = validateOptionRadioButtonFields(
          tax_exempt_true,
          tax_exempt_false
        );
        monthlyContributionValidation = validateOptionRadioButtonFields(
          monthly_contribution_true,
          monthly_contribution_false
        );

        smsNoficationsValidation = validateOptionRadioButtonFields(
          sms_notifications_true,
          sms_notifications_false
        );

        //CheckBoxValidation
        checkBoxValidation = validateCheckBoxFields(agree_to_terms);

        const stepThreeValidationsArray = [];

        //Validate Inputs
        stepThreeValidationsArray.push(
          idPassPortNoValidation,
          saluatationValidation,
          hearAboutUsValidation,
          firstNameStepTwoValidation,
          middleNameValidation,
          countryOfResidenceValidation,
          nationalityValidation,
          surnameValidation,
          emailAddressStepTwoValidation,
          roadHouseNoValidation,
          countryCodeStepTwoValidation,
          taxNoValidation,
          phoneNOStepTwoValidation,
          initialDepositValidation,
          genderValidation,
          maritalStatusValidation,
          dateOfBirthValidation,
          sourceOfFundsValidation,
          interestAccruedValidation,
          occupationValidation,
          employerValidation,
          accountNoValidation,
          accountNameValidation,
          bankValidation,
          bankBranchValidation,
          taxExemptValidation,
          monthlyContributionValidation,
          smsNoficationsValidation,
          checkBoxValidation
        );

        const next_step = validateFields(stepThreeValidationsArray);

        if (next_step === true) {
          activePanelNum++;
          setActiveStep(activePanelNum);
          setActivePanel(activePanelNum);
        }
      } else {
      }

      $('html, body').animate(
        {
          scrollTop: 0,
        },
        600
      );
    }
  });

  //SETTING PROPER FORM HEIGHT ONLOAD
  window.addEventListener('load', setFormHeight, true);

  //SETTING PROPER FORM HEIGHT ONRESIZE
  window.addEventListener('resize', setFormHeight, true);
});
