module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const allMessages = Math.round(document.querySelectorAll("#global_filters .home-link .count .value")[0].innerText);
        Franz.setBadge(allMessages);
    };
    Franz.loop(getMessages);
};