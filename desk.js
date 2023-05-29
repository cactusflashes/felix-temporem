//if this page is opened on anything other than an android or iOS device, it will redirect. 
var isMobile = {
    
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false; 
    },

    iOS: function() {
        return navigator.userAgent.match(/iPhone/i) ? true : false; 
    },

    any: function () {
        return (isMobile.Android() || isMobile.iOS());
    }

}; 

if (isMobile.any()) {
    window.location = 'https://felixtemporem.app/app'; 
}
