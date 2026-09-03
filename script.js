// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    

    const serviceSelect = document.getElementById('service-select');
    const addonCheckboxes = document.querySelectorAll('.addon-checkbox');
    const totalPriceDisplay = document.getElementById('total-price');

    function calculateTotal() {
        let total = 0;

        
        if (serviceSelect) {
            total += parseFloat(serviceSelect.value) || 0;
        }

        
        addonCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.value) || 0;
            }
        });

        
        if (totalPriceDisplay) {
            totalPriceDisplay.textContent = `R${total.toFixed(2)}`;
        }
    }

  
    if (serviceSelect) {
        serviceSelect.addEventListener('change', calculateTotal);
    }
    addonCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });


    const bookingForm = document.getElementById('booking-form');
    const formFeedback = document.getElementById('form-feedback');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const nameInput = document.getElementById('client-name').value.trim();
            const phoneInput = document.getElementById('client-phone').value.trim();

            if (nameInput === '' || phoneInput === '') {
                formFeedback.textContent = 'Please fill out all required fields.';
                formFeedback.style.color = 'red';
            } else {
                formFeedback.textContent = `Thank you, ${nameInput}! Your detailing request has been submitted.`;
                formFeedback.style.color = 'green';
                bookingForm.reset();
                calculateTotal();
            }
        });
    }

    // ==========================================
    // 3. Dynamic DOM Manipulation (Current Year)
    // ==========================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});