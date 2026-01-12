$(document).ready(function() {
    // 5 सेकंड का टाइमर (जो आपकी CSS प्रोग्रेस बार की टाइमिंग से मैच करता है)
    setTimeout(function() {
        // लोडिंग स्क्रीन को धीरे से छुपाने के लिए
        $('#deadline').fadeOut(500, function() {
            // मेन वेबसाइट को दिखाने के लिए
            $('#main-site').fadeIn(500);
        });
    }, 5000); 
});
