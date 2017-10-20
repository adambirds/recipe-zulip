module.exports = Franz => class Zulip extends Franz {
    async validateUrl(url) {
        const baseUrl = new window.URL(url);
        try {
            const resp = await window.fetch(`${baseUrl.origin}/api/v1/server_settings`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await resp.json();

            return Object.hasOwnProperty.call(data, 'realm_uri');
        } catch (err) {
            console.error(err);
        }

        return false;
    }
};