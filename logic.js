const allFiscalRadios = document.querySelectorAll('input[name="fiscal"]');
const buttonContainer = document.querySelector('.button-container');
const fiscalSituationPDFButton = document.createElement('a');
fiscalSituationPDFButton.className = 'btn';
fiscalSituationPDFButton.href = '#';
fiscalSituationPDFButton.textContent = 'Cargar Constancia';

allFiscalRadios.forEach(radio => {
                        radio.addEventListener('change', function() {
                            if (this.value === 'Si') {
                                buttonContainer.insertAdjacentElement('afterend', fiscalSituationPDFButton);
                            } else {
                                if (buttonContainer.nextElementSibling === fiscalSituationPDFButton) {
                                    buttonContainer.nextElementSibling.remove();
                                }
                            }
                        });
                    });