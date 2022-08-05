import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@jack/jack-app",
    app: () => System.import("@jack/jack-app"),
    activeWhen: ["/app"],
});

registerApplication({
    name: "@jack/jack-app2",
    app: () => System.import("@jack/jack-app2"),
    activeWhen: ["/app2"],
});

registerApplication({
    name: "@jack/jack-navbar",
    app: () => System.import("@jack/jack-navbar"),
    activeWhen: () => {
        return localStorage.getItem("app2") === "true";
    },
});

start({
    urlRerouteOnly: true,
});
