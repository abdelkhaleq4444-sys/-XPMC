function goToPayment(rank, price) {
    localStorage.setItem("rankName", rank);
    localStorage.setItem("rankPrice", price);
    window.location.href = "payment.html";
}

function copyIP(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        alert("تم نسخ IP: " + ip);
    });
}

// حماية الموقع
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl+Shift+I
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) { // Ctrl+U
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 67) { // Ctrl+Shift+C
        return false;
    }
};