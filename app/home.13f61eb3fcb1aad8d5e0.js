! function(e) {
    function t(t) {
        for (var r, i, s = t[0], c = t[1], u = t[2], d = 0, p = []; d < s.length; d++) i = s[d], o[i] && p.push(o[i][0]), o[i] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (l && l(t); p.length;) p.shift()();
        return a.push.apply(a, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (r = !1)
            }
            r && (a.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            1: 0
        },
        a = [];

    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var l = c;
    a.push([5, 0]), n()
}({
    "/kYV": function(e, t, n) {
        e.exports = {
            "u-debug": "u-debug--339vn",
            "u-shake": "u-shake--R7aZx",
            shake: "shake--ZcmO4",
            "u-o-100": "u-o-100--mPHO6",
            "u-o-90": "u-o-90--2kd9N",
            "u-o-80": "u-o-80--tJtcx",
            "u-o-70": "u-o-70--1J1Xb",
            "u-o-60": "u-o-60--1PJea",
            "u-o-50": "u-o-50--Es7HO",
            "u-o-40": "u-o-40--1jR-E",
            "u-o-30": "u-o-30--2NXXP",
            "u-o-20": "u-o-20--cVH7R",
            "u-o-10": "u-o-10--3tZZw",
            "u-o-05": "u-o-05--1Rdg-",
            "u-o-025": "u-o-025--SAP0E",
            "u-o-0": "u-o-0--3WE75",
            "CozyTheme--normal": "CozyTheme--normal--2pCV5",
            spin: "spin--2iFLV"
        }
    },
    "/n/j": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        t.a = (e = [], t) => {
            switch (t.type) {
                case "RECEIVE_APPS":
                    return t.apps || e;
                default:
                    return e
            }
        };
        const r = e => ({
                type: "RECEIVE_APPS",
                apps: e
            }),
            o = (e = [], t) => e.find(e => e.slug === t)
    },
    0: function(e, t) {},
    1: function(e, t) {},
    2: function(e, t) {},
    3: function(e, t) {},
    "3dAU": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "c", (function() {
            return s
        }));
        var r = n("m+TH");
        const o = "io.cozy.accounts",
            a = () => Object(r.g)("accounts", o),
            i = (e, t) => e.documents && e.documents[o] ? e.documents[o][t] : null,
            s = e => e.documents && e.documents[o] && Object.keys(e.documents[o]) || []
    },
    "4DAK": function(e, t, n) {
        "use strict";
        var r = n("q1tI"),
            o = n.n(r),
            a = n("6x+I"),
            i = n.n(a),
            s = {
                Link: function(e) {
                    return o.a.createElement("a", {
                        href: e.href,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, e.children)
                }
            };
        t.a = function(e) {
            var t = e.source;
            return o.a.createElement(i.a, {
                source: t,
                renderers: s
            })
        }
    },
    "4YEU": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return g
        })), n.d(t, "p", (function() {
            return b
        })), n.d(t, "q", (function() {
            return E
        })), n.d(t, "b", (function() {
            return v
        })), n.d(t, "e", (function() {
            return _
        })), n.d(t, "g", (function() {
            return O
        })), n.d(t, "h", (function() {
            return C
        })), n.d(t, "i", (function() {
            return N
        })), n.d(t, "j", (function() {
            return k
        })), n.d(t, "d", (function() {
            return x
        })), n.d(t, "f", (function() {
            return w
        })), n.d(t, "k", (function() {
            return D
        })), n.d(t, "o", (function() {
            return T
        })), n.d(t, "l", (function() {
            return S
        })), n.d(t, "m", (function() {
            return A
        })), n.d(t, "n", (function() {
            return L
        }));
        var r = n("fvjX"),
            o = n("wd/R"),
            a = n.n(o),
            i = n("Puqe"),
            s = n.n(i),
            c = n("mwIZ"),
            u = n.n(c),
            l = n("8CvS");
        n("sR/t");

        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    p(e, t, n[t])
                }))
            }
            return e
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const m = e => e && e.message && e.message.konnector || null,
            f = e => "io.cozy.triggers" === e._type && !!e.message && !!e.message.konnector;
        t.a = Object(r.combineReducers)({
            creation: (e = null, t) => {
                switch (t.type) {
                    case "RECEIVE_DATA":
                    case "RECEIVE_NEW_DOCUMENT": {
                        if (!e) return null;
                        if (!t.response || !t.response.data || 1 !== t.response.data.length) return e;
                        const n = t.response.data[0];
                        return "io.cozy.accounts" === n._type ? d({}, e, {
                            account: n._id
                        }) : f(n) ? d({}, e, {
                            trigger: n._id
                        }) : e
                    }
                    case "START_CONNECTION_CREATION":
                        return {};
                    case "END_CONNECTION_CREATION":
                        return null;
                    default:
                        return e
                }
            },
            konnectors: (e = {}, t) => {
                switch (t.type) {
                    case "ENQUEUE_CONNECTION":
                    case "UPDATE_CONNECTION_ERROR":
                    case "UPDATE_CONNECTION_RUNNING_STATUS":
                    case "LAUNCH_TRIGGER":
                        if (!t.trigger || !t.trigger._id) throw new Error("Missing trigger id");
                        if (!t.trigger.message || !t.trigger.message.konnector) throw new Error("Malformed trigger message");
                        return d({}, e, {
                            [m(t.trigger)]: h(e[m(t.trigger)], t)
                        });
                    case "RECEIVE_DATA":
                    case "RECEIVE_NEW_DOCUMENT":
                        return t.response && t.response.data && t.response.data.length ? t.response.data.reduce((e, t) => {
                            const n = f(t),
                                r = (e => "io.cozy.jobs" === e._type && "konnector" === e.worker)(t);
                            if (!n && !r) return e;
                            const o = t.message.konnector,
                                a = n && t._id || r && t.trigger_id;
                            if (!a) return e;
                            const i = n && !!t.message && t.message.account,
                                s = n && t.current_state && t.current_state.status || r && t.state,
                                c = n && !!t.current_state && "done" !== t.current_state.status && !!t.current_state.last_error && Object(l.a)(t.current_state.last_error) || r && !!t.error && Object(l.a)(t.error) || null,
                                p = n && !!t.current_state && t.current_state.last_execution || r && t.queued_at,
                                m = u()(e, [o, "triggers", "data"], []);
                            let h = m;
                            return n && (h = m.filter(({
                                _id: e
                            }) => e !== t._id), h.push(t)), d({}, e, {
                                [o]: {
                                    triggers: d({}, u()(e, [o, "triggers"], []), {
                                        data: h,
                                        [a]: d({}, u()(e, [o, "triggers", a], {}), {
                                            account: i || u()(e, [o, "triggers", a, "account"]),
                                            error: c,
                                            hasError: !!c || "errored" === s,
                                            isRunning: ["queued", "running"].includes(s),
                                            isConnected: !c && "done" === s,
                                            lastSyncDate: p
                                        })
                                    })
                                }
                            })
                        }, e) : e;
                    case "PURGE_QUEUE":
                    case "RECEIVE_DELETED_DOCUMENT":
                        return Object.keys(e).reduce((n, r) => d({}, n, {
                            [r]: h(e[r], t)
                        }), e);
                    default:
                        return e
                }
            }
        });
        const h = (e = {}, t) => {
                switch (t.type) {
                    case "ENQUEUE_CONNECTION":
                    case "LAUNCH_TRIGGER":
                    case "RECEIVE_DATA":
                    case "RECEIVE_NEW_DOCUMENT":
                    case "RECEIVE_DELETED_DOCUMENT":
                    case "PURGE_QUEUE":
                        return d({}, e, {
                            triggers: y(e.triggers, t)
                        });
                    default:
                        return e
                }
            },
            y = (e = {}, t) => {
                switch (t.type) {
                    case "ENQUEUE_CONNECTION":
                        return d({}, e, {
                            [t.trigger._id]: d({}, e[t.trigger._id], {
                                isEnqueued: !0
                            })
                        });
                    case "LAUNCH_TRIGGER":
                        return d({}, e, {
                            [t.trigger._id]: d({}, e[t.trigger._id], {
                                account: t.trigger.message.account,
                                isRunning: !0
                            })
                        });
                    case "PURGE_QUEUE":
                        return e ? Object.keys(e).reduce((e, t) => d({}, e, {
                            [t]: d({}, e[t], {
                                isEnqueued: !1
                            })
                        }), e) : e;
                    case "RECEIVE_DELETED_DOCUMENT": {
                        const {
                            data: n
                        } = t.response, {
                            _id: r,
                            _type: o
                        } = n[0];
                        return "io.cozy.triggers" === o ? s()(e, r) : e
                    }
                    default:
                        return e
                }
            },
            g = e => ({
                type: "ENQUEUE_CONNECTION",
                trigger: e
            }),
            b = () => ({
                type: "PURGE_QUEUE"
            }),
            E = e => ({
                type: "START_CONNECTION_CREATION",
                konnector: e
            }),
            v = () => ({
                type: "END_CONNECTION_CREATION"
            }),
            _ = (e, t, n = [], r = []) => {
                const o = !r.length || r.includes(t),
                    a = e.konnectors[t] && Object.keys(e.konnectors[t].triggers).length;
                return o && a ? Object.values(e.konnectors[t].triggers).filter(e => n.includes(e.account)) : []
            },
            O = (e, t) => {
                const n = !!e.konnectors && !!e.konnectors[t] && !!e.konnectors[t].triggers && Object.values(e.konnectors[t].triggers).find(e => !!e.error);
                return n ? n.error : null
            },
            C = (e, t) => {
                const n = !!e.konnectors && !!e.konnectors[t] && !!e.konnectors[t].triggers && Object.values(e.konnectors[t].triggers).find(e => Object(l.c)(e.error));
                return n ? n.error : null
            },
            N = (e, t) => {
                const n = !!e.konnectors && !!e.konnectors[t] && !!e.konnectors[t].triggers && Object.values(e.konnectors[t].triggers).map(e => e.lastSyncDate).sort((e, t) => {
                    const n = a.a.utc(e),
                        r = a.a.utc(t);
                    return n.isAfter(r) ? -1 : n.isBefore(r) ? 1 : 0
                });
                return n.length && n[0]
            },
            k = (e, t) => e.konnectors ? Object.keys(e.konnectors).reduce((n, r) => {
                const o = e.konnectors[r].triggers;
                if (!o) return n;
                const a = t[r];
                return n.concat(Object.keys(o).reduce((e, t) => {
                    if (o[t].isEnqueued) {
                        const r = a.name,
                            i = (n = o[t]).isRunning ? "ongoing" : n.hasError ? "error" : n.isConnected ? "done" : "pending";
                        return e.concat({
                            konnector: a,
                            label: r,
                            status: i,
                            triggerId: t
                        })
                    }
                    var n;
                    return e
                }, []))
            }, []) : [],
            x = (e, t) => z(e, t).error,
            w = e => !!e.creation && e.creation.account,
            D = (e, t, n, r = []) => !!t && !!n && r.includes(n._id) && !!e.konnectors[t.slug] && Object.keys(e.konnectors[t.slug].triggers).find(r => e.konnectors[t.slug].triggers[r].account === n._id),
            z = (e, t) => {
                const n = m(t);
                if (!n || !e.konnectors || !e.konnectors[n]) return !1;
                const r = e.konnectors[n].triggers;
                return !!r && (!!r && !!r[t._id] && r[t._id] || {})
            },
            T = e => !!e.creation,
            S = (e, t) => z(e, t).isConnected,
            A = (e, t) => z(e, t).isEnqueued,
            L = (e, t) => z(e, t).isRunning
    },
    5: function(e, t, n) {
        n("201c"), n("7NIr"), e.exports = n("LiWt")
    },
    "7dT6": function(e) {
        e.exports = {
            app: {
                logo: {
                    alt: "%{name} logo"
                }
            },
            date: {
                format: "MM/DD/YYYY",
                placeholder: "mm/dd/yyyy"
            },
            manifest: {
                name: "Home",
                short_description: "Cozy Collect is the application that help you gather all your personal data inside Cozy.",
                long_description: "With Cozy Collect, you can easily:\n * Downloads documents from all your suppliers\n * Set how often Cozy will collect your bills\n * Access directly to the documents gathered by your Cozy",
                changes: "You haven't missed it, the Store arrived in your Cozy!\nWe took advantage of it to improve Collect:\n * Store adaptation.\n * Tile merge: when you have several accounts for a single supplier, the former are now merged under the supplier tile.\n * Improvement of some Connectors pages."
            },
            add_service: "Add",
            fix_konnector_error: "Fix now",
            logout: "Log out",
            help: "Help",
            help_link: "https://help.cozy.io/",
            home_config_magic_folder: "/Settings/Home",
            account: {
                config: {
                    default_folder: "/Administrative/%{name}",
                    optional: "(Optional)",
                    title: "Connect your %{name} account",
                    data: {
                        title: "Collected data:",
                        service: {
                            description: "Service description:"
                        }
                    },
                    tabs: {
                        sync: "synchronization",
                        account: "account",
                        data: "collected data"
                    }
                },
                disconnect: {
                    title: "Disconnection",
                    description: "Your will be disconnected from this account, but imported data will be kept"
                },
                form: {
                    title: "Account",
                    label: {
                        firstname: "Firstname",
                        lastname: "Lastname",
                        login: "Login",
                        consumerKey: "Consumer Key",
                        consumerSecret: "Consumer Secret",
                        appKey: "Application Key",
                        appSecret: "Application Secret",
                        tricountUrl: "Tricount URL",
                        cardNumber: "Card Number",
                        dob: "Date of birth",
                        password: "Password",
                        email: "Email",
                        bank_identifier: "Bank identifier (optional)",
                        profileName: "Profile Name",
                        identifier: "Identifier",
                        new_identifier: "Identifier",
                        secret: "Password",
                        answer: "Secret Answer",
                        access_token: "Access token",
                        accessTokenSecret: "Access token secret",
                        apikey: "Api key",
                        phoneNumber: "Phone number",
                        folderPath: "Folder path",
                        namePath: "Folder name",
                        authCode: "Auth code",
                        accountName: "Account name",
                        loginUrl: "Login URL",
                        token: "Token",
                        agreement: "I agree",
                        refreshToken: "Refresh Token",
                        timeout: "Delay (ms)",
                        branchName: "Branch",
                        code: "Confidential code"
                    },
                    placeholder: {
                        password: "The password you use to connect to the service",
                        update_password: "Update the password",
                        accountName: "Example: Personal account",
                        namePath: "Example: Camille bills. Default name path is your login."
                    },
                    button: {
                        connect: "Connect",
                        cancel: "Cancel",
                        save: "Save",
                        disconnect: "Disconnect this account",
                        delete: "Delete this account",
                        advanced: "Advanced options",
                        synchronize: "Synchronize now"
                    }
                },
                folder: {
                    title: "Related folder settings",
                    withoutSettings: {
                        title: "Related folder"
                    },
                    link: "Open the folder in Cozy Drive",
                    changePath: "change the path",
                    error: "Oops, something went wrong. Don't panic, your files are still there, please try again later",
                    close: "close",
                    warning: "You're changing your folder path",
                    oldFiles: "All your olds bills will be moved in your new path.",
                    newFiles: "Your news bills will be downloaded in your new path.",
                    newPath: "Everything went well, the new path for your %{name} account is:",
                    placeholder: {
                        administrative: "Administrative",
                        photos: "Photos"
                    }
                },
                success: {
                    title: {
                        connect: "Successful configuration!",
                        update: "Your %{name} account is updated!"
                    },
                    banksLinkText: "See my accounts in %{appName}",
                    driveLinkText: "Open the folder in Cozy Drive",
                    button: "Close"
                },
                message: {
                    folder: {
                        title: "Folder",
                        link: "Open folder on cozy drive"
                    },
                    success: {
                        connect: "Your data will be available in your Cozy in a few minutes and the next ones will follow automatically.",
                        update: "Your %{name} account has been updated successfully.",
                        delete: "Account removed succesfully."
                    },
                    syncing: {
                        bill: "Your bills are syncing and will be available in the following path:"
                    },
                    synced: {
                        title: "Your data synchronization",
                        cron: "Synchronization frequency: %{frequency}",
                        cron_hourly: "each hour",
                        cron_daily: "once a day",
                        cron_weekly: "once a week",
                        cron_monthly: "once a month",
                        cron_undefined: "manually",
                        syncing: "running…",
                        unknown: "unknown",
                        last_sync: "Last synchronization: **%{date}**",
                        date_format: "MMMM D[,] YYYY [at] HH[:]mm",
                        bill: "Find your datas in the Drive app at this location:"
                    },
                    error: {
                        server: "Apologies, our server had an hiccup, do you mind starting again?",
                        bad_credentials: "Sorry, you entered an incorrect login or password.",
                        delete: "Apologies, our server had an hiccup, do you mind starting again?"
                    }
                },
                forceConnection: "Run again now",
                editor_detail: "Service developed by %{editor}"
            },
            account_picker: {
                add_account_button: {
                    label: "Add an account"
                }
            },
            apps: {
                title: "My apps"
            },
            connection: {
                CTA: {
                    twofa_failed: "Run again now"
                },
                error: {
                    default: {
                        title: "An error occured",
                        description: "Unfortunately, something went wrong when trying to connect to %{name}. Please check again your account informations, visit our online help or contact us at contact@cozycloud.cc."
                    },
                    DISK_QUOTA_EXCEEDED: {
                        title: "Cozy Storage full",
                        description: "This service cannot fetch your documents now. Please remove some files or go to **Settings > Storage** to get more free space."
                    },
                    CHALLENGE_ASKED: {
                        title: "Challenge required",
                        description: "It seems that the website requires a second authentification factor that we don’t support yet. You may try to settle the issue on the [%{name}](%{link}) website before a retry."
                    },
                    LOGIN_FAILED: {
                        title: "Bad credentials",
                        description: "Bad credentials. Check the konnector fields and run the connection again."
                    },
                    "LOGIN_FAILED.NEEDS_SECRET": {
                        title: "Needs secret",
                        description: "An additional field must be filled in before checking your credentials."
                    },
                    "LOGIN_FAILED.TOO_MANY_ATTEMPTS": {
                        title: "Temporarily blocked",
                        description: "Too many attempts occured. Please update your credentials on [%{name}](%{link}) website and update the konnector later on."
                    },
                    MAINTENANCE: {
                        title: "Unavailable website",
                        description: "It seems that the [%{name}](%{link}) website is unavailable or the konnector must be updated. Please rerun the connector later or visit our online help."
                    },
                    NOT_EXISTING_DIRECTORY: {
                        title: "Missing destination folder",
                        description: "It seems that this account's destination folder has been deleted. Please restore it by disconnecting this account and then reconnect again."
                    },
                    UNKNOWN_ERROR: {
                        title: "Connection error",
                        description: "An unknown error has occurred."
                    },
                    USER_ACTION_NEEDED: {
                        title: "Action needed on the provider",
                        description: "It seems that the [%{name}](%{link}) website requires you to log in and to do a specific action. Please rerun the connector once you have settled the issue on the website."
                    },
                    "USER_ACTION_NEEDED.OAUTH_OUTDATED": {
                        title: "Access refresh required",
                        description: "The [%{name}](%{link}) service requires you to allow your access again. Please disconnect and reconnect your account %{name} to this application. No data will be lost."
                    },
                    "USER_ACTION_NEEDED.ACCOUNT_REMOVED": {
                        title: "Unavailable account",
                        description: "It seems that your account is no longer active. Please check your account on [%{name}](%{link}) before retry."
                    },
                    "USER_ACTION_NEEDED.CHANGE_PASSWORD": {
                        title: "Password update required",
                        description: "It seems that the [%{name}](%{link}) website requires you to log in and update your password. Please rerun the connector once you have settled the issue on the website."
                    },
                    "USER_ACTION_NEEDED.PERMISSIONS_CHANGED": {
                        title: "New permissions validation needed",
                        description: "You connector was updated and the permissions changed. Please validate them before launching the connector again."
                    },
                    "USER_ACTION_NEEDED.TWOFA_EXPIRED": {
                        title: "Relaunch the connexion to the service to fetch your data",
                        description: "The last connexion to the service failed; please launch it again. You may have to provide a validation code."
                    },
                    "USER_ACTION_NEEDED.WRONG_TWOFA_CODE": {
                        title: "Wrong two-factore code provided",
                        description: "The two-factor code provided is wrong, please start again."
                    },
                    VENDOR_DOWN: {
                        title: "Unavailable service",
                        description: "It seems that the [%{name}](%{link}) service is unavailable at the moment. Please rerun the connector later."
                    },
                    "VENDOR_DOWN.BANK_DOWN": {
                        title: "Unavailable website",
                        description: "It seems that the [%{name}](%{link}) website is unavailable at the moment. Please rerun the connector later."
                    },
                    "VENDOR_DOWN.LINXO_DOWN": {
                        title: "Unavailable service",
                        description: "It seems that we are experiencing overload with our bank konnectors at the moment. Please rerun the connector later."
                    }
                }
            },
            intent: {
                konnector: {
                    install: {
                        error: {
                            message: "The konnector cannot be installed"
                        }
                    }
                },
                service: {
                    return: "Back to connectors list",
                    success: {
                        button: {
                            label: "Close"
                        }
                    },
                    error: {
                        initialization: "Service failed to initialize. Sorry for the inconvenience.",
                        creation: "Unable to create account, an error occurred.",
                        cause: "Cause: %{error}"
                    },
                    cancel: "Cancel",
                    terminate: "Terminate"
                }
            },
            field: {
                password: {
                    visibility: {
                        hide: "Hide",
                        show: "Show",
                        title: {
                            hide: "Hide password",
                            show: "Show password"
                        }
                    }
                }
            },
            nav: {
                services: "My services"
            },
            category: {
                all: "All",
                banking: "Banks",
                health: "Health",
                insurance: "Insurance",
                transport: "Transportation",
                social: "Social",
                isp: "ISP",
                telecom: "Telecom",
                energy: "Energy",
                host_provider: "Host",
                productivity: "Productivity",
                shopping: "Shopping",
                public_service: "Public Services",
                other: "Others"
            },
            loading: {
                initial: "Loading accounts...",
                working: "Loading"
            },
            validation: {
                exact_length: "It's must be made up of %{length} characters exactly.",
                max_length: "The length maximum is %{length} characters.",
                min_length: "It should contain at least %{length} characters.",
                pattern: "The value must match a specific pattern: %{pattern}"
            },
            update: {
                title: "An update is available for this service.",
                regular: "Perform this update to keep fetching your data and to have the latest features",
                blocking: "Update it to keep fetching your data",
                CTA: "Update"
            },
            error: {
                initial: "Something went wrong when fetching your connectors and informations. Please refresh the page.",
                LOGIN_FAILED: "Bad credentials. Check the konnector fields and run the connection again.",
                UNKNOWN_ERROR: "Something unexpected happened while running the connector",
                JOB_TIMEOUT: "The connector execution was too long",
                button: {
                    reload: "Refresh now"
                }
            },
            tutorial: {
                cozy_collect: {
                    title: "Automate your data gathering",
                    text: "They will be stored in your Cozy, you won't have to look for them anymore.",
                    button: "Next"
                },
                home: {
                    apps: {
                        button: "Next",
                        text: "Easily manage your digital life (files, pictures, bank accounts, ...)",
                        title: "Access to all your Cozy applications"
                    },
                    services: {
                        button: "Let's configure my accounts",
                        text: "They will be stored in your Cozy, you won't have to look for them anymore.",
                        title: "Automate your data gathering"
                    }
                },
                menu_apps: {
                    title: "Your Cozy is so much more than a simple data aggregator",
                    text: "Open the Applications menu to discover all the features your Cozy has to offer.",
                    button: "Discover my Apps"
                }
            },
            maintenance: {
                icon: "This connector is under maintenance",
                service: "Service interrupted",
                problem: "%{konnectorName} doesn't allow your Cozy to access your data",
                title: "What is going on ?"
            },
            connector: {
                debug: {
                    successMessage: "This konnector is for debug purpose only, this is an additionnal custom success message."
                },
                empty: {
                    title: "Start gathering your data!",
                    text: "Synchronise your brands with your Cozy to automatically retrieve your data (bills, reimbursements, expenses…)"
                },
                silenced: '%{name} won\'t be suggested anymore. You can always find a provider by clicking the "Add" button.',
                noAccount: "No account",
                add: "Add a service",
                update: "Update available",
                logo: {
                    alt: "%{name} logo"
                },
                enedis: {
                    description: {
                        service: "Recover your Linky data by connecting your Enedis account. You must have a Linky meter and have first created your Enedis account (on the [Enedis website](https://espace-client-connexion.enedis.fr/auth/UI/Login?realm=particuliers). This connector is provided by Fing for the MesInfos project. It retrieves the data from your electricity contract and downloads your electricity consumption the day before. This connector is running on your Cozy and the Fing will have no access to this data."
                    }
                },
                orange: {
                    message: {
                        delay: "Once connected, a demand to extract your data will be sent to Orange information system. These data will be available within 15 days. You data will be updated automatically, every 15 days."
                    }
                },
                orangemobile: {
                    description: {
                        connector: "In the context of 'MesInfos', Orange allows you to localize your phone regularly.\n\n**Data collection needs your express agreement**\n\nThis agreement may be revoked at any time by this data connector.\n\nBy clicking on \"Agree\", you give your consent to collect your phone's position, every 30 minutes. Information gathered will on be : \n<ul><li>Date and time of this location.</li><li>Location data of the closest radio antenna at the time of collect.</li></ul>Collected data by Orange after you agreement will be available only in your Cozy that you have been assigned in context of  « Mes Infos ». They will be added to location data already stored in call logs.",
                        service: 'This connector will download data from your Orange account on your Cozy. It will automatically download the call logs from your phone. Thus call logs include your phone number, your corresponding\'s phone number, date and time of this call and location data of the closest radio antenna at the time of collect.\n\nYou will be able to use these data in different apps in your Cozy, for example "Mapping My Life" (available soon on the Cozy Store).',
                        field: {
                            agreement: "Do you agree that Orange localizes regularly your phone in context of  « Mes Infos » ?"
                        }
                    }
                },
                orangevideos: {
                    description: {
                        service: 'This connector will download data from your Orange account on your Cozy. It will automatically download the list of movies you downloaded in free (TV Replay) or paid VOD from 01/01/2015 (adult contents are not included).\n\nYou will be able to use these data in different apps in your Cozy, for example "My Movies Music" (available soon on the Cozy Store).'
                    }
                },
                axabanque102: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                banquepopulaire: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                barclays136: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                bforbank97: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                bnpparibas82: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                boursorama83: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                bred: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                caatlantica3: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                caissedepargne1: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                carrefour159: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                casden173: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                cdngroup109: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                cdngroup88: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                cic45: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                cic63: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                comptenickel168: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                creditcooperatif148: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                creditmaritime: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                fortuneo84: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                hellobank145: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                hsbc119: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo).",
                        connector: "The secret answer is [asked by HSBC](https://www.hsbc.fr/1/2/hsbc-france/particuliers/connexion) when you connect without double authentication. Example: what is the name of your pet?"
                    }
                },
                ingdirect95: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                labanquepostale44: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl143: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl144: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl146: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                monabanq96: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                },
                societegenerale: {
                    description: {
                        service: "The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."
                    }
                }
            },
            Queue: {
                header: "Syncing accounts:",
                header_mobile: "%{done} of %{total}",
                header_done: "Synced %{done} out of %{total}",
                item: {
                    pending: "Pending"
                },
                close: "Close"
            },
            services: {
                title: "My services"
            },
            status: {
                interrupted: "INTERRUPTED SERVICE",
                edf: {
                    maintenance: "EDF's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from EDF. We are trying to restore the situation and we will notice you when it will be fixed. [Learn more](%{supportLink})",
                    support_link: "https://support.cozy.io/article/123-le-connecteur-edf-ne-fonctionne-pas"
                }
            },
            tile: {
                konnector: {
                    lastSyncDate: {
                        format: "MMM DD"
                    }
                }
            }
        }
    },
    "8CvS": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return a
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "a", (function() {
            return s
        }));
        const r = {
                CHALLENGE_ASKED: "CHALLENGE_ASKED",
                LOGIN_FAILED: "LOGIN_FAILED",
                MAINTENANCE: "MAINTENANCE",
                NOT_EXISTING_DIRECTORY: "NOT_EXISTING_DIRECTORY",
                USER_ACTION_NEEDED: "USER_ACTION_NEEDED",
                VENDOR_DOWN: "VENDOR_DOWN",
                DISK_QUOTA_EXCEEDED: "DISK_QUOTA_EXCEEDED"
            },
            o = {
                TERMS_VERSION_MISMATCH: "TERMS_VERSION_MISMATCH"
            };

        function a(e) {
            return e && e.type && [r.CHALLENGE_ASKED, r.DISK_QUOTA_EXCEEDED, r.LOGIN_FAILED, r.NOT_EXISTING_DIRECTORY, r.USER_ACTION_NEEDED].includes(e.type)
        }

        function i(e) {
            return e && e.type && Object.keys(o).includes(e.type)
        }

        function s(e) {
            var t = new Error(e);
            return t.type = e.split(".")[0], t.code = e, t
        }
    },
    "8Nns": function(e, t) {
        e.exports = "/img/drawing-arrow-up.f2db235d8647511afb4274575ef0bf0c.svg"
    },
    "9pOX": function(e) {
        e.exports = {
            app: {
                logo: {
                    alt: "Logo de %{name}"
                }
            },
            date: {
                format: "DD/MM/YYYY",
                placeholder: "dd/mm/yyyy"
            },
            manifest: {
                name: "Accueil",
                short_description: "Cozy Collect est l'application de récupération de vos données personnelles disponible sur Cozy.",
                long_description: "Avec Cozy Collect, vous pouvez facilement :\n\n * Télécharger les documents de tous vos fournisseurs\n * Configurer la fréquence à laquelle Cozy va récupérer vos factures\n * Accéder directement aux documents récupérés par votre Cozy",
                changes: "Cela ne vous aura pas échappé, le Store est arrivé dans Cozy !\nNous en avons profité pour améliorer Collect :\n\n * Adaptation au Store.\n * Fusion des tuiles : lorsque vous avez plusieurs comptes pour un même fournisseur ces derniers sont désormais réunis sous la tuile de ce fournisseur.\n * Amélioration des pages des connecteurs."
            },
            add_service: "Ajouter",
            fix_konnector_error: "Corriger maintenant",
            logout: "Déconnexion",
            help: "Aide",
            help_link: "https://support.cozy.io/",
            home_config_magic_folder: "/Settings/Home",
            account: {
                config: {
                    default_folder: "/Administratif/%{name}",
                    optional: "(Optionnel)",
                    title: "Connectez votre compte %{name}",
                    data: {
                        title: "Données collectées :",
                        service: {
                            description: "Description du service :"
                        }
                    },
                    tabs: {
                        sync: "Synchronisation",
                        account: "Compte",
                        data: "Données collectées"
                    }
                },
                disconnect: {
                    title: "Déconnexion",
                    description: "Vous serez déconnecté de ce compte, mais les données importées seront conservées"
                },
                form: {
                    title: "Compte",
                    label: {
                        firstname: "Prénom",
                        lastname: "Nom",
                        login: "Identifiant",
                        consumerKey: "Clé client",
                        consumerSecret: "Secret client",
                        appKey: "Clé de l'application",
                        appSecret: "Secret de l'application",
                        tricountUrl: "URL Tricount",
                        cardNumber: "Numéro de carte",
                        dob: "Date de naissance",
                        password: "Mot de passe",
                        email: "Mail",
                        bank_identifier: "Identifiant bancaire (optionnel)",
                        profileName: "Nom de Profil",
                        identifier: "Identifiant",
                        new_identifier: "Identifiant",
                        secret: "Mot de passe",
                        answer: "Réponse secrète",
                        access_token: "Jeton d'accès",
                        accessTokenSecret: "Secret du jeton d'accès",
                        apikey: "Clé d'API",
                        phoneNumber: "Numéro de téléphone",
                        folderPath: "Emplacement du dossier",
                        namePath: "Nom du dossier",
                        authCode: "Code d'authentification",
                        accountName: "Nom du compte",
                        loginUrl: "URL d'authentification",
                        token: "Jeton",
                        agreement: "J'accepte",
                        refreshToken: "Mettre à jour le jeton",
                        timeout: "Délai (ms)",
                        branchName: "Agence",
                        code: "Code confidentiel"
                    },
                    placeholder: {
                        password: "Le mot de passe utilisé pour vous connecter au service",
                        update_password: "Mettre à jour le mot de passe",
                        accountName: "Exemple: Compte personnel",
                        namePath: "Example : Factures de Camille. Le dossier par défaut sera votre identifiant."
                    },
                    button: {
                        connect: "Se connecter",
                        cancel: "Annuler",
                        save: "Sauvegarder",
                        disconnect: "Déconnecter ce compte",
                        delete: "Supprimer ce compte",
                        advanced: "Configuration avancée",
                        synchronize: "Mettre à jour maintenant"
                    }
                },
                folder: {
                    title: "Paramètres du dossier associé",
                    withoutSettings: {
                        title: "Dossier associé"
                    },
                    link: "Ouvrir le dossier dans Cozy Drive",
                    changePath: "Changer le dossier",
                    error: "Mince, quelque chose c'est mal passé. Ne vous inquiétez pas, vos fichiers sont toujours là.",
                    close: "fermer",
                    warning: "Vous êtes en train de modifier le dossier de votre connecteur",
                    oldFiles: "Toutes vos anciennes factures seront déplacées dans votre nouveau dossier.",
                    newFiles: "Toutes vos nouvelles factures seront téléchargées dans votre nouveau dossier.",
                    newPath: "Tout s'est bien passé, le nouveau dossier de votre compte %{name} est :",
                    placeholder: {
                        administrative: "Administratif",
                        photos: "Photos"
                    }
                },
                success: {
                    title: {
                        connect: "Configuration réussie !",
                        update: "Votre compte %{name} est mis à jour !"
                    },
                    banksLinkText: "Voir mes comptes dans %{appName}",
                    driveLinkText: "Ouvrir le dossier dans Cozy Drive",
                    button: "Fermer"
                },
                message: {
                    folder: {
                        title: "Dossier",
                        link: "Ouvrir le dossier dans Cozy Drive"
                    },
                    success: {
                        connect: "Vos données existantes seront disponibles dans votre Cozy dans quelques minutes et les prochaines suivront automatiquement.",
                        update: "Votre compte %{name} a été mis à jour avec succès.",
                        delete: "Compte supprimé avec succès."
                    },
                    syncing: {
                        bill: "Vos factures sont en cours de synchronisation et seront disponibles au chemin suivant :"
                    },
                    synced: {
                        title: "Mise à jour de vos données",
                        cron: "Fréquence de mise à jour : %{frequency}",
                        cron_hourly: "une fois par heure",
                        cron_daily: "une fois par jour",
                        cron_weekly: "hebdomadaire",
                        cron_monthly: "une fois par mois",
                        cron_undefined: "manuellement",
                        syncing: "en cours…",
                        unknown: "indéterminée",
                        last_sync: "Dernière mise à jour : **%{date}**",
                        date_format: "Le D MMMM YYYY [à] HH[:]mm",
                        bill: "Retrouvez vos données dans l'application Cozy Drive à l'emplacement :"
                    },
                    error: {
                        server: "Une erreur est survenue, vos identifiants n'ont pas pu être enregistrés. Pouvez-vous recommencer ?",
                        bad_credentials: "Votre identifiant et/ou mot de passe ne sont pas corrects.",
                        delete: "Une erreur est survenue, vos identifiants n'ont pas pu être enregistrés. Pouvez-vous recommencer ?"
                    }
                },
                forceConnection: "Relancer maintenant",
                editor_detail: "Service développé par %{editor}"
            },
            account_picker: {
                add_account_button: {
                    label: "Ajouter un compte"
                }
            },
            apps: {
                title: "Mes applications"
            },
            connection: {
                CTA: {
                    twofa_failed: "Relancer maintenant"
                },
                error: {
                    default: {
                        title: "Une erreur est survenue",
                        description: "Un problème semble s'être produit pendant la tentative de connexion à %{name}. Merci de revérifier vos informations de compte, de consulter notre aide en ligne ou de nous contacter à contact@cozycloud.cc"
                    },
                    DISK_QUOTA_EXCEEDED: {
                        title: "Espace Cozy plein",
                        description: "Actuellement, le service ne peut plus récupérer vos documents.\nLibérez de l'espace en supprimant des fichiers ou rendez-vous dans **Paramètres > Stockage** pour augmenter l'espace de stockage de votre Cozy"
                    },
                    CHALLENGE_ASKED: {
                        title: "Second facteur d’authentification demandé",
                        description: "Un second facteur d’authentification que nous ne gérons pas encore est demandé. Vous pouvez essayer de vous connecter directement sur le site [%{name}](%{link}) avant de réessayer."
                    },
                    LOGIN_FAILED: {
                        title: "Mauvais identifiants",
                        description: "Données de connexion incorrectes. Vérifiez les données de connexion dans le connecteur et relancez la connexion."
                    },
                    "LOGIN_FAILED.NEEDS_SECRET": {
                        title: "Informations requise",
                        description: "Un champ additionnel doit être rempli pour vérifier vos identifiants."
                    },
                    "LOGIN_FAILED.TOO_MANY_ATTEMPTS": {
                        title: "Temporairement bloqué",
                        description: "Trop de tentatives erronées ont eu lieu. Merci de modifier votre mot de passe sur le site [%{name}](%{link}) et de mettre à jour le connecteur ensuite."
                    },
                    MAINTENANCE: {
                        title: "Site non disponible",
                        description: "Il semble que le site [%{name}](%{link}) soit indisponible. Merci de relancer ultérieurement ou de consulter notre aide en ligne."
                    },
                    NOT_EXISTING_DIRECTORY: {
                        title: "Dossier de destination manquant",
                        description: "Il semble que le dossier de destination pour ce compte ait été supprimé. Merci de le restaurer en déconnectant ce compte puis en le reconnectant à nouveau."
                    },
                    UNKNOWN_ERROR: {
                        title: "Erreur de Connexion",
                        description: "Une erreur inconnue est survenue"
                    },
                    USER_ACTION_NEEDED: {
                        title: "Action nécessaire chez le fournisseur",
                        description: "Il semble que le site [%{name}](%{link}) ait besoin que vous vous y authentifiiez pour faire une action spécifique. Merci de relancer le connecteur une fois cette action effectuée."
                    },
                    "USER_ACTION_NEEDED.OAUTH_OUTDATED": {
                        title: "Actualisation de l'accès requis",
                        description: "Il semble que le site [%{name}](%{link}) demande d'autoriser à nouveau le connecteur. Merci de déconnecter puis reconnecter votre compte %{name}. Aucune donnée ne sera perdue."
                    },
                    "USER_ACTION_NEEDED.ACCOUNT_REMOVED": {
                        title: "Compte client non accessible",
                        description: "Il semble que votre compte ne soit plus actif. Merci de vérifier son statut sur le site [%{name}](%{link}) avant de réessayer."
                    },
                    "USER_ACTION_NEEDED.CHANGE_PASSWORD": {
                        title: "Renouvellement de mot de passe demandé",
                        description: "Il semble que le site [%{name}](%{link}) ait besoin que vous vous y authentifiiez pour renouveler votre mot de passe. Merci de relancer le connecteur une fois cette action effectuée."
                    },
                    "USER_ACTION_NEEDED.PERMISSIONS_CHANGED": {
                        title: "Validation des nouvelles permissions nécessaire",
                        description: "Votre connecteur a été mis à jour et les permissions nécessaires ont changé. Merci de valider les nouvelles permissions avant de relancer le connecteur."
                    },
                    "USER_ACTION_NEEDED.TWOFA_EXPIRED": {
                        title: "Relancez la connexion au service pour récupérer vos données.",
                        description: "La dernière connexion au service a échoué; merci de la relancer.\nIl vous faudra peut-être renseigner un code de validation."
                    },
                    "USER_ACTION_NEEDED.WRONG_TWOFA_CODE": {
                        title: "Le code fournis ne semble pas correct",
                        description: "Le code de deux facteurs est incorrect, veuillez recommencer."
                    },
                    VENDOR_DOWN: {
                        title: "Service non disponible",
                        description: "Il semble que le service [%{name}](%{link}) ne nous réponde pas dans les temps actuellement. Merci de relancer ultérieurement."
                    },
                    "VENDOR_DOWN.BANK_DOWN": {
                        title: "Site non disponible",
                        description: "Site non disponible"
                    },
                    "VENDOR_DOWN.LINXO_DOWN": {
                        title: "Service non disponible",
                        description: "Il semble que le site [%{name}](%{link}) ne nous réponde pas dans les temps actuellement. Merci de relancer ultérieurement."
                    }
                }
            },
            intent: {
                konnector: {
                    install: {
                        error: {
                            message: "Le connecteur ne peut pas être installé"
                        }
                    }
                },
                service: {
                    return: "Revenir à la liste des connecteurs",
                    success: {
                        button: {
                            label: "Fermer"
                        }
                    },
                    error: {
                        initialization: "L'initialisation du service a échoué.",
                        creation: "Impossible de créer le compte, il y a eu une erreur.",
                        cause: "Raison : %{error}"
                    },
                    cancel: "Annuler",
                    terminate: "Terminer"
                }
            },
            field: {
                password: {
                    visibility: {
                        hide: "Masquer",
                        show: "Afficher",
                        title: {
                            hide: "Masquer le mot de passe",
                            show: "Afficher le mot de passe"
                        }
                    }
                }
            },
            nav: {
                services: "Services installés"
            },
            category: {
                all: "Tous",
                banking: "Banques",
                health: "Santé",
                insurance: "Assurance",
                transport: "Voyage et transport",
                social: "Social",
                isp: "Internet",
                telecom: "Mobile",
                energy: "Énergie",
                host_provider: "Hébergeur",
                productivity: "Productivité",
                shopping: "Shopping",
                public_service: "Services publics",
                other: "Autres"
            },
            loading: {
                initial: "Chargement des comptes…",
                working: "Chargement"
            },
            validation: {
                exact_length: "La valeur doit faire exactement %{length} caractères.",
                max_length: "La longueur maximum est de %{length} caractères.",
                min_length: "La valeur doit contenir au moins %{length} caractères.",
                pattern: "La valeur doit respecter un format spécifique : %{pattern}"
            },
            update: {
                title: "Une mise à jour est disponible pour ce service.",
                regular: "Effectuez la mise à jour pour continuer à récupérer vos données et profiter des dernières fonctionnalités",
                blocking: "Mettez-le à jour pour continuer à récupérer vos données",
                CTA: "Mettre à jour"
            },
            error: {
                initial: "Quelque chose s’est mal passé pendant la récupération de vos connecteurs et de vos informations. Merci de recharger la page.",
                LOGIN_FAILED: "Données de connexion incorrectes. Vérifiez les données de connexion dans le connecteur et relancez la connexion.",
                UNKNOWN_ERROR: "Quelque-chose d’inattendu s‘est produit pendant l’exécution du connecteur",
                JOB_TIMEOUT: "L’exécution du connecteur a pris trop de temps",
                button: {
                    reload: "Rechargez la page maintenant"
                }
            },
            tutorial: {
                cozy_collect: {
                    title: "Automatisez la récupération de vos données",
                    text: "Elles seront conservées dans votre Cozy pour que vous n'ayez plus à les chercher.",
                    button: "Suivant"
                },
                home: {
                    apps: {
                        button: "Suivant",
                        text: "Gérez facilement toute votre vie numérique (photos, fichiers, compte bancaires, …)",
                        title: "Retrouvez toutes les applications de votre Cozy"
                    },
                    services: {
                        button: "Je connecte mes comptes",
                        text: "Elles seront conservées dans votre Cozy pour que vous n'ayez plus à les chercher.",
                        title: "Automatisez la récupération de vos données"
                    }
                },
                menu_apps: {
                    title: "Votre Cozy est bien plus qu’un simple agrégateur de données",
                    text: "Ouvrez le menu Applications pour découvrir toutes les possibilités offertes par votre Cozy.",
                    button: "Je découvre mes Applications"
                }
            },
            maintenance: {
                icon: "Ce connecteur est en cours de maintenance",
                service: "Service interrompu",
                problem: "%{konnectorName} ne permet pas à votre Cozy d'accéder à vos données",
                title: "Que se passe-t-il ?"
            },
            connector: {
                debug: {
                    successMessage: "Ce konnecteur est utilisé uniquement pour déboguer l'application, ceci est un message de succès additionnel."
                },
                empty: {
                    title: "Commencez à réunir vos données !",
                    text: "Synchronisez vos marques avec votre Cozy pour récupérer automatiquement vos données (factures, remboursements, dépenses…)"
                },
                silenced: '%{name} n’est plus proposé. Vous pourrez toujours retrouver un fournisseur en cliquant sur "Ajouter"',
                noAccount: "Aucun compte",
                add: "Ajouter un service",
                update: "Mise à jour dispo.",
                logo: {
                    alt: "Logo de %{name}"
                },
                enedis: {
                    description: {
                        service: "Retrouvez vos données Linky en connectant votre compte Enedis. Vous devez avoir un compteur Linky et avoir préalablement créé votre compte Enedis (sur [Enedis website](https://espace-client-connexion.enedis.fr/auth/UI/Login?realm=particuliers). Ce connecteur est proposé par Fing pour le projet MesInfos. Il récupère les données de votre contrat d'électricité et télécharge vos consommations électriques de la veille. Ce connecteur fonctionne sur votre Cozy et Fing n'aura aucun accès à vos données."
                    }
                },
                orange: {
                    message: {
                        delay: "Une demande d’extraction de vos données a été émise vers le système d’information d’Orange. Ces données seront disponibles sous 7 jours. Par la suite, vos données seront mises à jour automatiquement dans votre espace Cozy Cloud, à intervalles de 7 jours."
                    }
                },
                orangemobile: {
                    description: {
                        connector: "**De manière optionnelle et dans le cadre du pilote « Mes Infos »**, Orange vous offre aussi la possibilité de localiser votre téléphone mobile de manière régulière.\n\n**Le recueil de ces données nécessite votre accord explicite.**\n\nCet accord pourra être révoqué à tout moment via ce même connecteur de données.\n\nEn cliquant sur « Accepter », vous donnerez votre accord pour qu’une localisation de votre téléphone mobile soit effectuée à compter de ce jour, deux fois par heure. Les informations recueillies contiendront uniquement :\n<ul><li>La date et l’heure de cette localisation.</li><li>Les coordonnées géographiques de l’antenne radio à laquelle le mobile est rattaché au moment de la localisation.</li></ul>Les données récoltées par Orange  seront accessibles, après votre accord, uniquement dans le Cozy Cloud qui vous a été attribué dans le cadre du pilote « Mes Infos ». Elles viendront compléter les informations de localisation déjà présentes dans les comptes rendus d’appels.",
                        service: "Les données mises à disposition par Orange via ce connecteur contiennent les comptes rendus des appels émis et reçus depuis votre mobile à partir du 01/07/2016. Ces comptes rendus incluent votre numéro, celui de votre correspondant, l’heure et la durée de l’appel, ainsi que la localisation géographique de l’antenne radio à laquelle le mobile était rattaché au moment de l’appel.\n\nVous pourrez utiliser ces données dans différentes applications de votre Cozy Cloud, par exemple « Mapping My Life » (disponibilité prochaine sur le Cozy Store)",
                        field: {
                            agreement: "Acceptez-vous qu’Orange localise régulièrement votre téléphone mobile dans le cadre du pilote « Mes Infos » ?"
                        }
                    }
                },
                orangevideos: {
                    description: {
                        service: "Les données mises à disposition par Orange via ce connecteur contiennent la liste des films que vous avez visionnés à partir du 01/01/2015 en VOD payante ou gratuite (Replay TV) à partir de votre Livebox (à l’exception des contenus « adulte »). \n\nVous pourrez utiliser ces données dans différentes applications de votre Cozy, par exemple « La Musique de mes Films » (disponibilité prochaine sur le Cozy Store) "
                    }
                },
                axabanque102: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                banquepopulaire: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                barclays136: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo). "
                    }
                },
                bforbank97: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                bnpparibas82: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                boursorama83: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                bred: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                caatlantica3: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                caissedepargne1: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                carrefour159: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                casden173: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                cdngroup109: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                cdngroup88: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                cic45: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                cic63: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                comptenickel168: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                creditcooperatif148: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                creditmaritime: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                fortuneo84: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                hellobank145: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                hsbc119: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo).",
                        connector: "La réponse secrète est [demandée par HSBC](https://www.hsbc.fr/1/2/hsbc-france/particuliers/connexion) lors d'une connexion sans double authentification. Exemple: quel est le nom de votre animal de compagnie? "
                    }
                },
                ingdirect95: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                labanquepostale44: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl143: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl144: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl146: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                monabanq96: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                },
                societegenerale: {
                    description: {
                        service: "La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."
                    }
                }
            },
            Queue: {
                header: "Synchronisation :",
                header_mobile: "%{done} sur %{total}",
                header_done: "Synchronisé %{done} sur %{total}",
                item: {
                    pending: "En cours"
                },
                close: "Fermer"
            },
            services: {
                title: "Mes services"
            },
            status: {
                interrupted: "SERVICE INTERROMPU",
                edf: {
                    maintenance: "EDF a modifié son système d'information et son accès à vos données ne fonctionne plus. Ce connecteur n'est donc pas actuellement en mesure de récupérer vos données personnelles détenues par EDF. Nous tentons de rétablir la situation et vous informerons dès que le service sera rétabli. [En savoir plus](%{supportLink})",
                    support_link: "https://support.cozy.io/article/123-le-connecteur-edf-ne-fonctionne-pas"
                }
            },
            tile: {
                konnector: {
                    lastSyncDate: {
                        format: "DD MMM"
                    }
                }
            }
        }
    },
    "B/vO": function(e, t, n) {
        "use strict";
        var r = n("pVnL"),
            o = n.n(r),
            a = n("QILm"),
            i = n.n(a),
            s = n("q1tI"),
            c = n.n(s),
            u = n("rvOC"),
            l = n("SH7X");
        t.a = Object(l.withClient)((function(e) {
            var t = e.client,
                n = i()(e, ["client"]),
                r = new URL(t.getStackClient().uri),
                a = r.host,
                s = "https:" === r.protocol;
            return c.a.createElement(u.a, o()({
                domain: a,
                secure: s
            }, n))
        }))
    },
    FwS1: function(e, t, n) {
        e.exports = {
            queue: "queue--E5doD",
            "queue--visible": "queue--visible--3kodM",
            "queue-header": "queue-header--1xuYz",
            "queue-header-inner": "queue-header-inner--2hQ34",
            "btn-close": "btn-close--1_NjM",
            "queue-progress": "queue-progress--3kjuG",
            "queue-content": "queue-content--3aNvV",
            "queue--collapsed": "queue--collapsed--aksIJ",
            "queue-list": "queue-list--3gpgx",
            "queue-item--error": "queue-item--error--11w-V",
            "queue-item--done": "queue-item--done--fE0KV",
            "queue-item": "queue-item--2nmo3",
            "queue-item-progress-bar": "queue-item-progress-bar--2-yvo",
            "item-label": "item-label--1Q26g",
            "item-ext": "item-ext--3RUut",
            "item-status": "item-status--qmrpq",
            "item-icon": "item-icon--2Q7Zb",
            "item-icon-img": "item-icon-img--7qiT6",
            "item-pending": "item-pending--1lCQW"
        }
    },
    Gyt3: function(e) {
        e.exports = {
            konnectors: [{
                slug: "ameli",
                name: "Ameli"
            }, {
                slug: "impots",
                name: "Impôts.gouv.fr"
            }],
            categories: {
                banking: ["hsbc119", "caissedepargne1", "ingdirect95", "cic45"],
                isp: ["sfr", "free", "orange", "bouyguestelecom"],
                insurance: ["maifecheancier", "alan", "harmonie", "macif"],
                energy: ["engie", "planeteoui", "veoliaeau", "ekwateur"]
            }
        }
    },
    KAKi: function(e, t, n) {
        var r = {
            "./en": "7dT6",
            "./en.json": "7dT6",
            "./es": "oway",
            "./es.json": "oway",
            "./fr": "9pOX",
            "./fr.json": "9pOX"
        };

        function o(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        o.keys = function() {
            return Object.keys(r)
        }, o.resolve = a, e.exports = o, o.id = "KAKi"
    },
    LiWt: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("MVZn"),
            o = n.n(r),
            a = n("q1tI"),
            i = n.n(a),
            s = n("i8i4"),
            c = n("m+TH"),
            u = (n("dasq"), n("SH7X")),
            l = n.n(u),
            d = n("Le8U"),
            p = n("sDS3"),
            m = n("buk/"),
            f = n("1I/2"),
            h = n("kdbL"),
            y = n.n(h),
            g = n("qgiu"),
            b = n("IN8/"),
            E = n("4kcP");
        class v extends b.a {
            constructor(e) {
                super(e), this.history = function(e) {
                    if (Object(E.b)() && Object(E.a)()) {
                        let t = Object(E.a)();
                        e = t.connectToHistory(e), t.track(e.location)
                    }
                    return e
                }(this.history)
            }
        }
        var _ = n("cXEB"),
            O = (n("/8/d"), n("M50D"), n("MkRj"), n("/kYV"), document.documentElement.getAttribute("lang") || "en"),
            C = window.context || "cozy";
        document.addEventListener("DOMContentLoaded", (function() {
            if (!Object(p.b)()) {
                var e = document.querySelector("[role=application]").dataset,
                    t = new c.a({
                        cozyURL: "//".concat(e.cozyDomain),
                        token: e.cozyToken
                    }),
                    r = new l.a({
                        uri: "".concat(window.location.protocol, "//").concat(e.cozyDomain),
                        schema: {
                            app: d.Application.schema,
                            accounts: {
                                doctype: "io.cozy.accounts",
                                attributes: {},
                                relationships: {
                                    master: {
                                        type: "has-one",
                                        doctype: "io.cozy.accounts"
                                    }
                                }
                            },
                            permissions: {
                                doctype: "io.cozy.permissions",
                                attributes: {}
                            },
                            triggers: {
                                doctype: "io.cozy.triggers"
                            },
                            jobs: {
                                doctype: "io.cozy.jobs"
                            }
                        },
                        token: e.cozyToken
                    });
                r.registerPlugin(y.a.plugin);
                var a = Object(_.a)(t, r, C, o()({
                        lang: O
                    }, g)),
                    h = n("bRzR").default;
                Object(s.render)(i.a.createElement(u.CozyProvider, {
                    client: r
                }, i.a.createElement(c.b, {
                    store: a,
                    client: r,
                    domain: e.cozyDomain,
                    secure: !0
                }, i.a.createElement(m.c, {
                    lang: O,
                    dictRequire: function(e) {
                        return n("KAKi")("./".concat(e))
                    },
                    context: C
                }, i.a.createElement(f.a, null, i.a.createElement(v, null, i.a.createElement(h, g)))))), document.querySelector("[role=application]"))
            }
        }))
    },
    NfqR: function(e, t, n) {
        e.exports = {
            "CozyTheme--normal": "CozyTheme--normal--3SYGd",
            "coz-loading-placeholder": "coz-loading-placeholder--iKREi",
            placeHolderShimmer: "placeHolderShimmer--25Y66"
        }
    },
    QxZi: function(e) {
        e.exports = ["energy", "insurance", "isp", "shopping", "telecom", "transport", "banking", "public_service"]
    },
    bRzR: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("o0o1"),
            o = n.n(r),
            a = n("yXPU"),
            i = n.n(a),
            s = n("lwsE"),
            c = n.n(s),
            u = n("W8MJ"),
            l = n.n(u),
            d = n("a1gu"),
            p = n.n(d),
            m = n("Nsbk"),
            f = n.n(m),
            h = n("PJYZ"),
            y = n.n(h),
            g = n("7W2i"),
            b = n.n(g),
            E = n("lSNA"),
            v = n.n(E),
            _ = n("q1tI"),
            O = n.n(_),
            C = n("nlwj"),
            N = n.n(C),
            k = n("jKe7"),
            x = n("2INN"),
            w = n("mf+E"),
            D = n("wIs1"),
            z = n("ExA7"),
            T = n.n(z),
            S = n("Z0cm"),
            A = n.n(S),
            L = n("7GkX"),
            R = n.n(L),
            I = n("TYy9"),
            j = n.n(I),
            q = n("kdbL"),
            M = n.n(q),
            P = n("i9cR"),
            U = n.n(P),
            F = n("67rm"),
            V = n("le8I"),
            Y = n("jDpt"),
            G = n("V2U0"),
            H = n("mD6Q"),
            W = n("17x9"),
            K = n.n(W),
            B = n("SH7X"),
            Q = n("mwIZ"),
            J = n.n(Q),
            X = n("J4zp"),
            Z = n.n(X),
            $ = function(e) {
                var t = Object(_.useState)({}),
                    n = Z()(t, 2),
                    r = n[0],
                    a = n[1],
                    s = Object(_.useState)("idle"),
                    c = Z()(s, 2),
                    u = c[0],
                    l = c[1];
                return Object(_.useEffect)((function() {
                    (function() {
                        var t = i()(o.a.mark((function t() {
                            var n;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, l("loading"), t.next = 4, e.query(Object(B.Q)("io.cozy.settings").getById("instance"));
                                    case 4:
                                        n = t.sent, a(J()(n, "data.attributes"), {}), l("loaded"), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(0), l("failed");
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 9]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    })()()
                }), []), {
                    data: r,
                    fetchStatus: u
                }
            },
            ee = n("qgiu"),
            te = function(e) {
                var t = Object(_.useState)(null),
                    n = Z()(t, 2),
                    r = n[0],
                    a = n[1],
                    s = Object(_.useState)("idle"),
                    c = Z()(s, 2),
                    u = c[0],
                    l = c[1];
                return Object(_.useEffect)((function() {
                    (function() {
                        var t = i()(o.a.mark((function t() {
                            var n;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, l("loading"), t.next = 4, e.collection("io.cozy.files").getDownloadLinkByPath(ee.customWallpaperPath);
                                    case 4:
                                        n = t.sent, a(n), l("loaded"), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(0), l("failed");
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 9]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    })()()
                }), []), {
                    data: {
                        wallpaperLink: r
                    },
                    fetchStatus: u
                }
            },
            ne = n("buk/"),
            re = n("pVnL"),
            oe = n.n(re),
            ae = n("KXWi"),
            ie = n("1I/2"),
            se = function(e) {
                var t = Object(ie.b)().isMobile,
                    n = e.href ? ae.b : ae.c;
                return O.a.createElement(n, oe()({
                    size: "small",
                    theme: "text",
                    className: "corner-button",
                    iconOnly: t,
                    extension: t ? "narrow" : null
                }, e))
            },
            ce = function() {
                var e = Object(ne.e)().t,
                    t = Object(B.useClient)(),
                    n = Object(_.useCallback)(i()(o.a.mark((function e() {
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.logout();
                                case 2:
                                    window.location.reload();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [t]);
                return O.a.createElement(se, {
                    label: e("logout"),
                    icon: "logout",
                    onClick: n
                })
            },
            ue = n("sCMN"),
            le = B.models.applications,
            de = B.fetchPolicies.olderThan(3e4),
            pe = [{
                flagName: "help-is-displayed",
                isDisplayedByDefault: !0,
                Button: function() {
                    var e = Object(ne.e)().t;
                    return O.a.createElement(se, {
                        label: e("help"),
                        href: e("help_link"),
                        icon: "help"
                    })
                }
            }, {
                flagName: "settings-is-displayed",
                isDisplayedByDefault: !1,
                Button: Object(B.queryConnect)({
                    settingsAppQuery: {
                        query: function() {
                            return Object(B.Q)("io.cozy.apps").where({
                                slug: "settings"
                            })
                        },
                        fetchPolicy: de,
                        as: "settingsAppQuery"
                    }
                })((function(e) {
                    var t = e.settingsAppQuery.data,
                        n = Object(ne.e)().lang,
                        r = J()(t, "[0]"),
                        o = J()(r, "links.related"),
                        a = J()(r, "slug"),
                        i = le.getAppDisplayName(r, n);
                    return a && o ? O.a.createElement(ue.a, {
                        slug: a,
                        href: o
                    }, (function(e) {
                        var t = e.onClick,
                            n = e.href;
                        return O.a.createElement(se, {
                            label: i,
                            href: n,
                            onClick: t,
                            icon: "gear"
                        })
                    })) : null
                }))
            }, {
                flagName: "logout-is-displayed",
                isDisplayedByDefault: !0,
                Button: ce
            }],
            me = function(e) {
                var t = e.client,
                    n = te(t),
                    r = n.fetchStatus,
                    o = n.data.wallpaperLink,
                    a = t.getStackClient().uri,
                    i = new URL(a).host,
                    s = t.getInstanceOptions().cozyDefaultWallpaper,
                    c = null;
                "loading" !== r && (c = o || s);
                var u = $(t).data,
                    l = J()(u, "public_name", "");
                return O.a.createElement("header", {
                    className: "hero-header",
                    style: {
                        backgroundImage: "url(".concat(c, ")")
                    }
                }, O.a.createElement("div", {
                    className: "corner"
                }, pe.map((function(e) {
                    var t = e.flagName,
                        n = e.isDisplayedByDefault,
                        r = e.Button;
                    return function(e, t) {
                        return null === M()(e) ? t : M()(e)
                    }("home.corner.".concat(t), n) ? O.a.createElement(r, {
                        key: t
                    }) : null
                }))), O.a.createElement("div", null, O.a.createElement("img", {
                    className: "hero-avatar",
                    src: "".concat(a, "/public/avatar")
                })), O.a.createElement("h1", {
                    className: "hero-title"
                }, l), O.a.createElement("h2", {
                    className: "hero-subtitle"
                }, i))
            };
        me.propTypes = {
            client: K.a.object.isRequired
        };
        var fe = Object(B.withClient)(me),
            he = n("X+Uv"),
            ye = n("y6ex"),
            ge = n("kyGY"),
            be = n("4BeY"),
            Ee = n.n(be),
            ve = n("IaFt"),
            _e = n.n(ve),
            Oe = new Ee.a({
                id: "default_e8acf04a531f51e2591973ab13ba63d7",
                use: "default_e8acf04a531f51e2591973ab13ba63d7-usage",
                viewBox: "0 0 64 64",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="default_e8acf04a531f51e2591973ab13ba63d7">\n  <g fill="none" fill-rule="evenodd">\n    <path fill="#855CEA" fill-rule="nonzero" d="M32,17.3818748 C38.4788008,17.3818748 43.7310547,22.7384047 43.7310547,29.3455954 C43.7310547,35.9527861 38.4788008,41.3093161 32,41.3093161 C25.5211992,41.3093161 20.2689453,35.9527861 20.2689453,29.3455954 C20.2689453,22.7384047 25.5211992,17.3818748 32,17.3818748 Z M32,58.9450016 C24.97375,58.9450016 18.6050907,56.0787139 14,51.4547232 C17.8412687,47.7235961 24.4673594,45.2587711 32,45.2587711 C39.5326406,45.2587711 46.1587313,47.7235961 50,51.4547232 C45.3949093,56.0787139 39.02625,58.9450016 32,58.9450016 Z" />\n    <g transform="translate(3)">\n      <circle cx="29" cy="32" r="27" stroke="#C2ADF4" stroke-width="4" />\n      <circle cx="29" cy="6" r="6" fill="#C2ADF4" />\n      <circle cx="29" cy="58" r="6" fill="#C2ADF4" />\n      <circle cx="52" cy="47" r="6" fill="#C2ADF4" />\n      <circle cx="6" cy="47" r="6" fill="#C2ADF4" />\n      <circle cx="52" cy="18" r="6" fill="#C2ADF4" />\n      <circle cx="6" cy="18" r="6" fill="#C2ADF4" />\n    </g>\n  </g>\n</symbol>'
            }),
            Ce = (_e.a.add(Oe), Oe),
            Ne = function() {
                window.location.reload()
            },
            ke = Object(ne.d)()((function(e) {
                var t = e.t,
                    n = e.errorType;
                return O.a.createElement(he.a, {
                    className: "u-flex u-flex-column u-flex-items-center"
                }, O.a.createElement(ye.a, {
                    icon: Ce,
                    size: 64
                }), O.a.createElement(ge.c, {
                    tag: "h2",
                    className: "u-ta-center"
                }, t("error.".concat(n))), O.a.createElement(ae.c, {
                    label: t("error.button.reload"),
                    onClick: Ne
                }))
            })),
            xe = n("4p7I"),
            we = n("9C/b"),
            De = n("MVZn"),
            ze = n.n(De),
            Te = n("/MKj"),
            Se = n("56YH"),
            Ae = n.n(Se),
            Le = n("iDCe"),
            Re = n("uZd2"),
            Ie = n("cokx"),
            je = n("9FdZ"),
            qe = function(e) {
                function t() {
                    return c()(this, t), p()(this, f()(t).apply(this, arguments))
                }
                return b()(t, e), l()(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.konnector,
                            n = e.history,
                            r = e.triggers,
                            o = ze()({}, t, {
                                triggers: {
                                    data: r
                                }
                            });
                        return O.a.createElement(Le.b, {
                            konnectorRoot: "/connected/".concat(t.slug),
                            konnector: o,
                            onDismiss: function() {
                                return n.push("/connected")
                            }
                        })
                    }
                }]), t
            }(_.Component),
            Me = Ae()(Object(Te.connect)((function(e, t) {
                var n = t.match.params.konnectorSlug;
                return {
                    konnector: Object(Re.d)(e.cozy, n),
                    triggers: Object(Ie.h)(e, n)
                }
            })), je.withClient, D.a)(qe),
            Pe = n("B/vO"),
            Ue = B.models.applications,
            Fe = function(e) {
                function t() {
                    return c()(this, t), p()(this, f()(t).apply(this, arguments))
                }
                return b()(t, e), l()(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.app,
                            n = e.t,
                            r = e.lang,
                            o = Ue.getAppDisplayName(t, r),
                            a = t.links && t.links.related;
                        return O.a.createElement(ue.a, {
                            slug: t.slug,
                            href: a
                        }, (function(e) {
                            var r = e.onClick,
                                a = e.href;
                            return O.a.createElement("a", {
                                onClick: r,
                                href: a,
                                className: "item"
                            }, O.a.createElement("div", {
                                className: "item-icon"
                            }, O.a.createElement(Pe.a, {
                                alt: n("app.logo.alt", {
                                    name: o
                                }),
                                app: t
                            })), O.a.createElement("h3", {
                                className: "item-title"
                            }, o))
                        }))
                    }
                }]), t
            }(_.Component);
        Fe.propTypes = {
            app: K.a.object.isRequired,
            t: K.a.func.isRequired
        };
        var Ve = Object(ne.d)()(Fe),
            Ye = function() {
                var e = Object(ne.e)().t,
                    t = Object(B.useClient)(),
                    n = Object(_.useCallback)(i()(o.a.mark((function e() {
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.logout();
                                case 2:
                                    window.location.reload();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [t]),
                    r = Object(ie.b)().isMobile;
                return O.a.createElement("button", {
                    onClick: n,
                    className: "item"
                }, O.a.createElement("div", {
                    className: "item-icon"
                }, O.a.createElement(ye.a, {
                    icon: "logout-large",
                    size: r ? 32 : 40
                })), O.a.createElement("h3", {
                    className: "item-title"
                }, e("logout")))
            },
            Ge = n("Le8U"),
            He = function(e) {
                var t = e.file,
                    n = Object(B.useClient)(),
                    r = Object(B.useFetchShortcut)(n, t._id).shortcutInfos,
                    o = J()(r, "data.attributes.url", "#"),
                    a = J()(r, "data.attributes.metadata.icon"),
                    i = Ge.CozyFile.splitFilename(t).filename,
                    s = Object(ie.b)().isMobile;
                return O.a.createElement("a", {
                    href: o,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "item"
                }, O.a.createElement("div", {
                    className: "item-icon"
                }, a ? O.a.createElement("img", {
                    src: "data:image/svg+xml;base64,".concat(btoa(a)),
                    width: "100%",
                    alt: ""
                }) : O.a.createElement(ye.a, {
                    icon: "device-browser",
                    size: s ? 32 : 40,
                    color: "var(--charcoalGrey)"
                })), O.a.createElement("h3", {
                    className: "item-title"
                }, i))
            },
            We = n("NfqR"),
            Ke = n.n(We),
            Be = function() {
                return O.a.createElement("span", {
                    className: Ke.a["coz-loading-placeholder"]
                })
            },
            Qe = n("/n/j");
        var Je = () => {
                const e = Object(B.useClient)(),
                    {
                        t: t
                    } = Object(ne.e)(),
                    [n, r] = Object(_.useState)([]);
                return Object(_.useEffect)(() => {
                    (async () => {
                        const n = await e.query(Object(B.Q)("io.cozy.files").where({
                                path: t("home_config_magic_folder")
                            })),
                            o = J()(n, "data[0]._id");
                        if (o) {
                            const {
                                data: t
                            } = await e.query(Object(B.Q)("io.cozy.files").where({
                                dir_id: o,
                                class: "shortcut"
                            }));
                            r(t)
                        }
                    })()
                }, []), n
            },
            Xe = Object(_.memo)((function(e) {
                for (var t = e.num, n = [], r = 0; r < t; r++) n.push(O.a.createElement("div", {
                    className: "item-wrapper",
                    key: r
                }, O.a.createElement("header", {
                    className: "item-header"
                }, O.a.createElement("div", {
                    className: "item-icon"
                }, O.a.createElement(Be, null))), O.a.createElement("h3", {
                    className: "item-title"
                }, O.a.createElement(Be, null))));
                return O.a.createElement(O.a.Fragment, null, n)
            }));
        Xe.displayName = Xe;
        var Ze = Object(_.memo)((function(e) {
            var t = e.receiveApps,
                n = !!M()("home.mainlist.show-logout"),
                r = Je();
            return O.a.createElement("div", {
                className: "app-list"
            }, O.a.createElement(B.Query, {
                query: function() {
                    return Object(B.Q)("io.cozy.apps")
                }
            }, (function(e) {
                var n = e.data,
                    r = e.fetchStatus;
                return "loaded" === r && t(n), "loaded" !== r ? O.a.createElement(Xe, {
                    num: "3"
                }) : n.filter((function(e) {
                    return "hidden" !== e.state && !ee.filteredApps.includes(e.slug) && !M()("home_hidden_apps.".concat(e.slug.toLowerCase()))
                })).map((function(e, t) {
                    return O.a.createElement(Ve, {
                        key: t,
                        app: e
                    })
                }))
            })), r.map((function(e, t) {
                return O.a.createElement(He, {
                    key: t,
                    file: e
                })
            })), n && O.a.createElement(Ye, null))
        }));
        Ze.displayName = "Applications";
        var $e = Object(Te.connect)(null, (function(e) {
                return {
                    receiveApps: function(t) {
                        return e(Object(Qe.c)(t))
                    }
                }
            }))(Ze),
            et = function(e) {
                function t() {
                    return c()(this, t), p()(this, f()(t).apply(this, arguments))
                }
                return b()(t, e), l()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props && this.props.target;
                        e && "function" == typeof e.scrollTo && e.scrollTo(0, 0)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]), t
            }(_.Component),
            tt = n("xweI"),
            nt = n.n(tt),
            rt = n("QVEU"),
            ot = n.n(rt),
            at = n("OFL0"),
            it = n.n(at),
            st = n("AHTZ"),
            ct = n("yoMi"),
            ut = Object(B.withClient)((function(e) {
                var t = e.label,
                    n = e.client,
                    r = new URL(n.getStackClient().uri),
                    o = n.getInstanceOptions().cozySubdomainType;
                return O.a.createElement(ue.a, {
                    slug: "store",
                    nativePath: "/discover/?type=konnector",
                    href: Object(st.b)({
                        cozyUrl: r.origin,
                        slug: "store",
                        nativePath: "/discover/?type=konnector",
                        subDomainType: o
                    })
                }, (function(e) {
                    var n = e.onClick,
                        r = e.href;
                    return O.a.createElement("a", {
                        onClick: n,
                        href: r,
                        className: "item item--ghost item--add-service"
                    }, O.a.createElement("div", {
                        className: "item-icon"
                    }, O.a.createElement(ye.a, {
                        icon: "plus",
                        size: 16,
                        color: ct.dodgerBlue
                    })), O.a.createElement("span", {
                        className: "item-title"
                    }, t))
                }))
            })),
            lt = n("TSYQ"),
            dt = n.n(lt),
            pt = n("uNOt"),
            mt = n("4YEU"),
            ft = n("MmAb"),
            ht = function(e) {
                var t = e.error,
                    n = e.lang,
                    r = e.konnector;
                if (!t || !t.message) return null;
                var o = new ft.a(t.message);
                return Object(ft.f)(o, r, n, "title")
            },
            yt = 0,
            gt = 1,
            bt = 2,
            Et = 3,
            vt = 4,
            _t = function(e) {
                function t() {
                    return c()(this, t), p()(this, f()(t).apply(this, arguments))
                }
                return b()(t, e), l()(t, [{
                    key: "render",
                    value: function() {
                        var e, t = this.props,
                            n = t.accountsCount,
                            r = t.error,
                            o = t.isInMaintenance,
                            a = t.userError,
                            i = t.konnector,
                            s = t.route,
                            c = t.t,
                            u = t.lang,
                            l = (e = {}, v()(e, vt, {
                                className: "item--ghost",
                                icon: null,
                                color: null
                            }), v()(e, bt, {
                                className: "item--maintenance",
                                icon: "wrench-circle",
                                color: ct.coolGrey
                            }), v()(e, Et, {
                                className: null,
                                icon: "warning-circle",
                                color: ct.pomegranate
                            }), e),
                            d = M()("home.konnectors.hide-errors") ? yt : function(e) {
                                var t = e.konnector,
                                    n = e.isInMaintenance,
                                    r = e.error,
                                    o = e.userError,
                                    a = e.accountsCount;
                                return t.available_version ? gt : n ? bt : r || o ? Et : a ? yt : vt
                            }({
                                konnector: i,
                                isInMaintenance: o,
                                error: r,
                                userError: a,
                                accountsCount: n
                            }),
                            p = J()(l, d, {}),
                            m = p.className,
                            f = p.icon,
                            h = p.color;
                        return O.a.createElement(pt.a, {
                            className: dt()("item", m),
                            to: s,
                            title: ht({
                                error: r,
                                lang: u,
                                konnector: i
                            })
                        }, O.a.createElement("div", {
                            className: "item-icon"
                        }, O.a.createElement(Pe.a, {
                            alt: c("app.logo.alt", {
                                name: i.name
                            }),
                            app: i
                        }), f && O.a.createElement(ye.a, {
                            icon: f,
                            className: "item-status",
                            color: h
                        })), O.a.createElement("h3", {
                            className: "item-title"
                        }, i.name))
                    }
                }]), t
            }(_.Component);
        _t.propTypes = {
            accountsCount: K.a.number,
            error: K.a.object,
            isInMaintenance: K.a.bool.isRequired,
            userError: K.a.object,
            konnector: K.a.object,
            route: K.a.string.isRequired,
            t: K.a.func.isRequired
        };
        var Ot = Object(ne.d)()(Object(Te.connect)((function(e, t) {
                var n = t.konnector;
                return {
                    error: Object(mt.g)(e.connections, n.slug),
                    userError: Object(mt.h)(e.connections, n.slug),
                    lastSyncDate: Object(mt.i)(e.connections, n.slug),
                    accountsCount: Object(Ie.f)(e, n)
                }
            }))(Object(D.a)(_t))),
            Ct = n("7HjR"),
            Nt = function(e) {
                var t = e.t,
                    n = e.slugs,
                    r = e.category,
                    o = e.client,
                    a = new URL(o.getStackClient().uri),
                    i = "/discover?type=konnector&category=".concat(r),
                    s = o.getInstanceOptions().cozySubdomainType;
                return O.a.createElement(ue.a, {
                    slug: "store",
                    nativePath: i,
                    href: Object(st.b)({
                        cozyUrl: a.origin,
                        slug: "store",
                        nativePath: i,
                        subDomainType: s
                    })
                }, (function(e) {
                    var o = e.onClick,
                        a = e.href;
                    return O.a.createElement("a", {
                        onClick: o,
                        href: a,
                        className: "item item--ghost"
                    }, O.a.createElement("div", {
                        className: "item-icon"
                    }, O.a.createElement(Ct.a, null, n.map((function(e) {
                        return O.a.createElement(Pe.a, {
                            alt: t("app.logo.alt", {
                                name: r
                            }),
                            app: e,
                            key: e,
                            className: "item-grid-icon"
                        })
                    })))), O.a.createElement("span", {
                        className: "item-title"
                    }, t("category.".concat(r))))
                }))
            };
        Nt.propTypes = {
            slugs: K.a.arrayOf(K.a.string).isRequired,
            category: K.a.string.isRequired,
            client: K.a.object.isRequired
        };
        var kt = Object(ne.d)()(Object(B.withClient)(Nt)),
            xt = function(e, t) {
                var n = Object(_.useState)(null),
                    r = Z()(n, 2),
                    a = r[0],
                    s = r[1],
                    c = new B.Registry({
                        client: e
                    });
                return Object(_.useEffect)((function() {
                    (function() {
                        var e = i()(o.a.mark((function e() {
                            var n;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, c.fetchApp(t);
                                    case 2:
                                        n = e.sent, s(n);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), [t]), a
            },
            wt = function(e) {
                var t = e.t,
                    n = e.client,
                    r = e.konnector,
                    o = r.slug,
                    a = xt(n, o),
                    i = a ? J()(a, "latest_version.manifest.name", o) : "",
                    s = Object(_.useState)(!1),
                    c = Z()(s, 2),
                    u = c[0],
                    l = c[1];
                return O.a.createElement(O.a.Fragment, null, u && O.a.createElement(Le.a, {
                    konnectorAppSuggestion: r,
                    konnectorManifest: J()(a, "latest_version.manifest", {}),
                    onClose: function() {
                        l(!1)
                    },
                    onSilence: function() {
                        l(!1), F.a.success(t("connector.silenced", {
                            name: i
                        }))
                    }
                }), O.a.createElement("div", {
                    className: "item item--ghost",
                    onClick: function() {
                        return l(!0)
                    }
                }, O.a.createElement("div", {
                    className: "item-icon"
                }, O.a.createElement(Pe.a, {
                    alt: t("app.logo.alt", {
                        name: i
                    }),
                    app: o
                })), O.a.createElement("span", {
                    className: "item-title"
                }, i)))
            };
        wt.propTypes = {
            t: K.a.func.isRequired,
            client: K.a.object.isRequired,
            konnector: K.a.shape({
                slug: K.a.string.isRequired
            }).isRequired
        };
        var Dt = Object(ne.d)()(Object(B.withClient)(wt)),
            zt = function(e) {
                var t = e.t,
                    n = e.slug,
                    r = e.client,
                    o = new URL(r.getStackClient().uri),
                    a = "/discover/".concat(n),
                    i = r.getInstanceOptions().cozySubdomainType,
                    s = xt(r, n),
                    c = s ? J()(s, "latest_version.manifest.name", n) : "";
                return O.a.createElement(ue.a, {
                    slug: "store",
                    nativePath: a,
                    href: Object(st.b)({
                        cozyUrl: o.origin,
                        slug: "store",
                        nativePath: a,
                        subDomainType: i
                    })
                }, (function(e) {
                    var r = e.onClick,
                        o = e.href;
                    return O.a.createElement("a", {
                        onClick: r,
                        href: o,
                        className: "item item--ghost"
                    }, O.a.createElement("div", {
                        className: "item-icon"
                    }, O.a.createElement(Pe.a, {
                        alt: t("app.logo.alt", {
                            name: c
                        }),
                        app: n
                    })), O.a.createElement("span", {
                        className: "item-title"
                    }, c))
                }))
            };
        zt.propTypes = {
            slug: K.a.string.isRequired,
            client: K.a.object.isRequired
        };
        var Tt = Object(ne.d)()(Object(B.withClient)(zt)),
            St = n("LNIv"),
            At = n("8Nns"),
            Lt = n.n(At),
            Rt = Object(ne.d)()((function(e) {
                var t = e.t;
                return O.a.createElement(St.c, {
                    align: "top",
                    className: "EmptyServicesListTip"
                }, O.a.createElement(St.b, null, O.a.createElement("img", {
                    src: Lt.a
                })), O.a.createElement(St.a, {
                    className: "EmptyServicesListTip-text"
                }, O.a.createElement(ge.f, null, t("connector.empty.title")), O.a.createElement(ge.e, {
                    tag: "p",
                    className: "u-mv-half"
                }, t("connector.empty.text"))))
            })),
            It = function(e) {
                var t = Object(_.useState)([]),
                    n = Z()(t, 2),
                    r = n[0],
                    a = n[1],
                    s = new B.Registry({
                        client: e
                    });
                return Object(_.useEffect)((function() {
                    (function() {
                        var e = i()(o.a.mark((function e() {
                            var t;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s.fetchAppsInMaintenance();
                                    case 2:
                                        t = e.sent, a(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []), r
            },
            jt = n("Gyt3"),
            qt = function(e) {
                var t = e.t,
                    n = e.installedKonnectors,
                    r = e.suggestedKonnectorsQuery,
                    o = e.client,
                    a = It(o),
                    i = ot()(a, "slug"),
                    s = a.map((function(e) {
                        return e.slug
                    })).concat(n.map((function(e) {
                        return e.slug
                    }))),
                    c = r.data.filter((function(e) {
                        var t = e.slug;
                        return !s.includes(t)
                    })),
                    u = jt.konnectors.filter((function(e) {
                        var t = e.slug;
                        return !s.includes(t)
                    })),
                    l = Object.entries(jt.categories),
                    d = !n.length,
                    p = d && 0 === c.length,
                    m = d && (c.length >= 1 || u.length >= 1);
                return O.a.createElement(O.a.Fragment, null, O.a.createElement("div", {
                    className: "services-list"
                }, n.map((function(e, t) {
                    return O.a.createElement(Ot, {
                        key: t,
                        konnector: e,
                        route: "connected/".concat(e.slug),
                        isInMaintenance: it()(i, e.slug)
                    })
                })), c.map((function(e) {
                    return O.a.createElement(Dt, {
                        key: e.slug,
                        konnector: e
                    })
                })), p && u.map((function(e) {
                    return O.a.createElement(Tt, {
                        key: e.slug,
                        slug: e.slug
                    })
                })), d && l.map((function(e) {
                    var t = Z()(e, 2),
                        n = t[0],
                        r = t[1];
                    return O.a.createElement(kt, {
                        key: n,
                        slugs: r,
                        category: n
                    })
                })), O.a.createElement(ut, {
                    label: t("add_service")
                })), m && O.a.createElement(Rt, null))
            };
        qt.propTypes = {
            t: K.a.func.isRequired,
            installedKonnectors: K.a.arrayOf(K.a.shape({
                slug: K.a.string
            })).isRequired,
            suggestedKonnectorsQuery: K.a.shape({
                data: K.a.array.isRequired
            }).isRequired,
            client: K.a.object.isRequired
        };
        var Mt = Ae()(Object(Te.connect)((function(e) {
                return {
                    installedKonnectors: nt()(Object(Ie.e)(e), (function(e) {
                        return e.name.toLowerCase()
                    }))
                }
            })), Object(ne.d)(), Object(B.queryConnect)({
                suggestedKonnectorsQuery: {
                    query: function(e) {
                        return e.find("io.cozy.apps.suggestions").where({
                            silenced: !1
                        }).sortBy([{
                            silenced: "asc"
                        }, {
                            slug: "asc"
                        }]).indexFields(["silenced", "slug"])
                    }
                }
            }), B.withClient)(qt),
            Pt = n("M2p0"),
            Ut = n("ski3"),
            Ft = n("ufaa"),
            Vt = n("4DAK"),
            Yt = B.models.triggers,
            Gt = Yt.triggers,
            Ht = Yt.triggerStates,
            Wt = B.models.accounts,
            Kt = function() {
                var e = i()(o.a.mark((function e(t, n, r) {
                    var a, i, s, c;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = Gt.getAccountId(n), i = r[a], s = Ht.getLastErrorType(n), c = Wt.muteError(i, s), e.next = 6, t.save(c);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, n, r) {
                    return e.apply(this, arguments)
                }
            }(),
            Bt = function(e) {
                return e.slug
            },
            Qt = function(e) {
                var t = e.t,
                    n = e.lang,
                    r = e.triggersInError,
                    o = e.accountsWithErrors,
                    a = e.installedKonnectors,
                    i = e.history,
                    s = e.client,
                    c = e.breakpoints.isMobile,
                    u = ot()(o, "_id"),
                    l = ot()(a, Bt),
                    d = r.filter((function(e) {
                        var t = Ht.getLastErrorType(e),
                            n = Gt.getAccountId(e),
                            r = u[n],
                            o = Gt.getKonnector(e),
                            i = a && a.some((function(e) {
                                return e.slug === o
                            }));
                        return ee.displayedErrorTypes.includes(t) && i && r && !Gt.isLatestErrorMuted(e, r)
                    }));
                return d.length > 0 ? O.a.createElement("div", {
                    className: "KonnectorErrors"
                }, O.a.createElement(Ut.a, {
                    theme: "danger"
                }, d.map((function(e, r) {
                    var o = Ht.getLastErrorType(e),
                        a = new ft.a(o),
                        p = Gt.getKonnector(e),
                        m = Gt.getAccountId(e),
                        f = l[p],
                        h = Object(ft.f)(a, f, n, "title"),
                        y = Object(ft.f)(a, f, n, "description");
                    return O.a.createElement(Pt.a, {
                        key: e._id,
                        description: O.a.createElement(O.a.Fragment, null, O.a.createElement("div", {
                            className: "u-pomegranate u-flex u-flex-row u-flex-items-center"
                        }, O.a.createElement(Pe.a, {
                            alt: t("app.logo.alt", {
                                name: p
                            }),
                            app: p,
                            className: "u-w-2 u-h-2 u-w-1-half-s u-h-1-half-s u-mr-1"
                        }), O.a.createElement("div", null, O.a.createElement("span", {
                            className: "u-fz-tiny"
                        }, f.name), O.a.createElement(ge.d, {
                            className: "u-pomegranate u-fz-medium u-fz-small-m"
                        }, d.length > 1 ? "(".concat(r + 1, "/").concat(d.length, ") ") : null, h))), O.a.createElement(ge.h, {
                            className: "u-fz-small-m"
                        }, O.a.createElement(Vt.a, {
                            source: y
                        }))),
                        action: O.a.createElement(ae.c, {
                            theme: "secondary",
                            label: t("fix_konnector_error"),
                            className: "u-mh-0",
                            size: c ? "small" : "normal",
                            onClick: function() {
                                return i.push("/connected/".concat(p, "/accounts/").concat(m))
                            }
                        }),
                        dismissAction: function() {
                            return Kt(s, e, u)
                        }
                    })
                })))) : null
            };
        Qt.propTypes = {
            t: K.a.func.isRequired,
            triggersInError: K.a.array.isRequired,
            accountsWithErrors: K.a.array.isRequired,
            installedKonnectors: K.a.array.isRequired,
            history: K.a.object.isRequired,
            client: K.a.object.isRequired,
            breakpoints: K.a.shape({
                isMobile: K.a.bool.isRequired
            }).isRequired
        };
        var Jt = Ae()(Object(Te.connect)((function(e) {
                return {
                    triggersInError: Object(Ie.i)(e),
                    accountsWithErrors: Object(Ie.b)(e),
                    installedKonnectors: Object(Ie.e)(e)
                }
            })), D.a, B.withClient, Object(ne.d)(), Object(Ft.a)())(Qt),
            Xt = function() {
                var e = i()(o.a.mark((function e(t) {
                    var n, r, a;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, n = t.getStackClient().uri, e.next = 4, t.getStackClient().fetchJSON("GET", "/settings/context");
                            case 4:
                                return r = e.sent, a = J()(r, "data.attributes.home_logos", {}), e.abrupt("return", Object.keys(a).reduce((function(e, t) {
                                    return e["".concat(n, "/assets").concat(t)] = a[t], e
                                }), {}));
                            case 9:
                                return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", {});
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 9]
                    ])
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            Zt = function(e) {
                function t() {
                    var e, n;
                    c()(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return n = p()(this, (e = f()(t)).call.apply(e, [this].concat(o))), v()(y()(n), "state", {
                        logos: {}
                    }), n
                }
                var n;
                return b()(t, e), l()(t, [{
                    key: "componentDidMount",
                    value: (n = i()(o.a.mark((function e() {
                        var t;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Xt(this.props.client);
                                case 2:
                                    t = e.sent, this.setState({
                                        logos: t
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.logos;
                        return 0 !== Object.keys(e).length && O.a.createElement("div", {
                            className: "u-maw-7 u-mh-auto u-mt-1 u-pv-1 u-flex u-flex-row u-flex-items-center u-flex-justify-center u-flex-wrap"
                        }, Object.entries(e).map((function(e) {
                            var t = Z()(e, 2),
                                n = t[0],
                                r = t[1];
                            return O.a.createElement("img", {
                                key: n,
                                src: n,
                                alt: r,
                                className: "u-ph-1 u-pv-half u-mah-5"
                            })
                        })))
                    }
                }]), t
            }(O.a.Component);
        K.a.propTypes = {
            client: K.a.object
        };
        var $t = Object(B.withClient)(Zt),
            en = function(e) {
                function t() {
                    return c()(this, t), p()(this, f()(t).apply(this, arguments))
                }
                return b()(t, e), l()(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props.wrapper;
                        return O.a.createElement(Y.b, {
                            className: "main-content"
                        }, O.a.createElement(et, {
                            target: e
                        }), O.a.createElement(Y.a, {
                            className: "lists-wrapper"
                        }, O.a.createElement($e, null), O.a.createElement(Jt, null), O.a.createElement(Mt, null), O.a.createElement($t, null)), O.a.createElement(xe.a, {
                            path: "/connected/:konnectorSlug",
                            component: Me
                        }))
                    }
                }]), t
            }(_.Component),
            tn = Object(we.a)(Object(ne.d)()(en)),
            nn = Object(Te.connect)((function(e) {
                return {
                    installedKonnectors: Object(Ie.e)(e)
                }
            }))((function(e) {
                var t = e.installedKonnectors,
                    n = e.location,
                    r = !!n && n.search,
                    o = r && r.substring(1).split("&").reduce((function(e, t) {
                        var n = t.split("=");
                        return e[n[0]] = n[1] || !0, e
                    }), {});
                if (!o.konnector) return O.a.createElement(w.a, {
                    to: "/connected"
                });
                if (!t.find((function(e) {
                        return e.slug === o.konnector
                    }))) return cozy.client.intents.redirect("io.cozy.apps", {
                    slug: o.konnector
                });
                var a = "/connected/".concat(o.konnector);
                return o.account && (a = "".concat(a, "/accounts/").concat(o.account)), O.a.createElement(w.a, {
                    to: a
                })
            })),
            rn = function(e) {
                function t(e) {
                    var n;
                    c()(this, t), n = p()(this, f()(t).call(this, e));
                    var r = e.match && e.match.params.category,
                        o = {
                            type: "konnector"
                        };
                    return r && "all" !== r && (o.category = e.match.params.category), cozy.client.intents.redirect("io.cozy.apps", o), n
                }
                return b()(t, e), l()(t, [{
                    key: "render",
                    value: function() {
                        return O.a.createElement(G.a, {
                            size: "xxlarge",
                            middle: !0
                        })
                    }
                }]), t
            }(_.Component),
            on = n("FwS1"),
            an = n.n(on),
            sn = Object(ne.d)()((function(e) {
                return O.a.createElement("span", {
                    className: an.a["item-pending"]
                }, e.t("Queue.item.pending"))
            })),
            cn = function(e) {
                function t() {
                    var e, n;
                    c()(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return n = p()(this, (e = f()(t)).call.apply(e, [this].concat(o))), v()(y()(n), "state", {
                        progress: 0
                    }), n
                }
                return b()(t, e), l()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = 0;
                        this.progressInterval = setInterval((function() {
                            t += 10;
                            var n = Math.atan(t / 3e3) / (Math.PI / 2) * 90;
                            e.setState({
                                progress: n
                            })
                        }), 25)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.progressInterval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state.progress;
                        return O.a.createElement("div", {
                            role: "progressbar",
                            "aria-valuenow": t,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                            className: dt()(an.a["queue-item-progress-bar"]),
                            style: {
                                width: "".concat(t, "%")
                            },
                            ref: function(t) {
                                return e.progressBar = t
                            }
                        })
                    }
                }]), t
            }(_.Component),
            un = function(e) {
                function t() {
                    return c()(this, t), p()(this, f()(t).apply(this, arguments))
                }
                return b()(t, e), l()(t, [{
                    key: "render",
                    value: function() {
                        var e, t, n = this.props,
                            r = n.konnector,
                            o = n.label,
                            a = n.status,
                            i = n.t,
                            s = "ongoing" === a;
                        switch (a) {
                            case "ongoing":
                                t = O.a.createElement(G.a, {
                                    noMargin: !0,
                                    className: "u-ml-half",
                                    color: ct.dodgerBlue
                                });
                                break;
                            case "canceled":
                                t = O.a.createElement(ye.a, {
                                    className: "u-ml-half",
                                    icon: "cross",
                                    color: ct.monza
                                });
                                break;
                            case "error":
                            case "conflict":
                                t = O.a.createElement(ye.a, {
                                    className: "u-ml-half",
                                    icon: "warning",
                                    color: ct.monza
                                });
                                break;
                            case "done":
                                t = O.a.createElement(ye.a, {
                                    className: "u-ml-half",
                                    icon: "check-circleless",
                                    color: ct.emerald
                                });
                                break;
                            case "pending":
                            default:
                                t = O.a.createElement(sn, null)
                        }
                        return O.a.createElement("div", {
                            className: dt()(an.a["queue-item"], (e = {}, v()(e, an.a["queue-item--done"], "done" === a), v()(e, an.a["queue-item--error"], "error" === a), e))
                        }, O.a.createElement("div", {
                            className: dt()(an.a["item-icon"])
                        }, O.a.createElement(Pe.a, {
                            alt: i("app.logo.alt", {
                                name: r.name
                            }),
                            className: "c-",
                            app: r
                        })), O.a.createElement("div", {
                            className: dt()(an.a["item-label"])
                        }, o), O.a.createElement("div", {
                            className: an.a["item-status"]
                        }, t), s && O.a.createElement(cn, null))
                    }
                }]), t
            }(_.Component),
            ln = function(e) {
                function t() {
                    var e, n;
                    c()(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return n = p()(this, (e = f()(t)).call.apply(e, [this].concat(o))), v()(y()(n), "state", {
                        collapsed: !1
                    }), v()(y()(n), "toggleCollapsed", (function() {
                        n.setState((function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        }))
                    })), n
                }
                return b()(t, e), l()(t, [{
                    key: "render",
                    value: function() {
                        var e, t = this.props,
                            n = t.t,
                            r = t.visible,
                            o = void 0 !== r && r,
                            a = t.queue,
                            i = void 0 === a ? [] : a,
                            s = t.purgeQueue,
                            c = this.state.collapsed,
                            u = i.filter((function(e) {
                                return "ongoing" !== e.status
                            })).length,
                            l = i.filter((function(e) {
                                return "done" === e.status
                            })).length;
                        return O.a.createElement("div", {
                            className: dt()(an.a.queue, (e = {}, v()(e, an.a["queue--visible"], o), v()(e, an.a["queue--collapsed"], c), e))
                        }, O.a.createElement("h4", {
                            className: an.a["queue-header"],
                            onDoubleClick: this.toggleCollapsed
                        }, u < i.length && O.a.createElement("div", {
                            className: an.a["queue-header-inner"]
                        }, O.a.createElement("span", {
                            className: "coz-desktop"
                        }, n("Queue.header")), O.a.createElement("span", {
                            className: "coz-mobile"
                        }, n("Queue.header_mobile", {
                            done: u,
                            total: i.length
                        }))), u >= i.length && O.a.createElement("div", {
                            className: an.a["queue-header-inner"]
                        }, O.a.createElement("span", null, n("Queue.header_done", {
                            done: l,
                            total: i.length
                        })), O.a.createElement("button", {
                            className: dt()(an.a["btn-close"]),
                            onClick: s
                        }, n("Queue.close")))), O.a.createElement("progress", {
                            className: an.a["queue-progress"],
                            value: u,
                            max: i.length
                        }), O.a.createElement("div", {
                            className: an.a["queue-content"]
                        }, O.a.createElement("div", {
                            className: an.a["queue-list"]
                        }, i.map((function(e) {
                            return O.a.createElement(un, {
                                key: e.triggerId,
                                konnector: e.konnector,
                                label: e.label,
                                status: e.status,
                                t: n
                            })
                        })))))
                    }
                }]), t
            }(_.Component),
            dn = Object(ne.d)()(ln),
            pn = Object(Te.connect)((function(e) {
                var t = Object(Ie.c)(e);
                return {
                    queue: t,
                    visible: !!t.length
                }
            }), (function(e) {
                return {
                    purgeQueue: function() {
                        return e(Object(mt.p)())
                    }
                }
            }))(dn),
            mn = n("zEKg"),
            fn = n.n(mn);
        n.d(t, "toFlagNames", (function() {
            return hn
        }));
        window.flag = window.flag || M.a, window.minilog = U.a;
        var hn = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return "string" == typeof t ? "".concat(n).concat(t) : A()(t) ? j()(t.map((function(t) {
                    return e(t, n)
                }))) : T()(t) ? j()(R()(t).map((function(r) {
                    return e(t[r], "".concat(n).concat(r, "."))
                }))) : void 0
            },
            yn = function(e) {
                function t(e, n) {
                    var r;
                    return c()(this, t), r = p()(this, f()(t).call(this, e, n)), v()(y()(r), "state", {
                        error: null,
                        status: "idle"
                    }), r.store = n.store, r
                }
                var n;
                return b()(t, e), l()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.fetchContext()
                    }
                }, {
                    key: "fetchContext",
                    value: (n = i()(o.a.mark((function e() {
                        var t, n, r = this;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.setState({
                                        status: "FETCHING_CONTEXT"
                                    }), e.next = 3, cozy.client.fetchJSON("GET", "/settings/context").catch((function(e) {
                                        r.setState({
                                            error: e,
                                            status: "idle"
                                        })
                                    }));
                                case 3:
                                    (t = e.sent) && t.attributes && t.attributes.features && (n = hn(t.attributes.features), Object(q.enable)(n)), this.setState({
                                        status: "idle"
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.accounts,
                            r = t.konnectors,
                            o = t.triggers,
                            a = [n, r, o].find((function(e) {
                                return ["pending", "loading"].includes(e.fetchStatus)
                            })),
                            i = [n, r, o].find((function(e) {
                                return "failed" === e.fetchStatus
                            })),
                            s = this.state.status,
                            c = !i && !a && !("FETCHING_CONTEXT" === s),
                            u = M()("home.timeline.show");
                        return O.a.createElement("div", {
                            className: "App"
                        }, O.a.createElement("div", {
                            className: "App-MainCol",
                            ref: c ? function(t) {
                                e.contentWrapper = t
                            } : null
                        }, O.a.createElement(F.a, null), O.a.createElement(fe, null), i && O.a.createElement(Y.b, {
                            className: "main-loader"
                        }, O.a.createElement(ke, {
                            errorType: "initial"
                        })), a && O.a.createElement(Y.b, {
                            className: "main-loader"
                        }, O.a.createElement(G.a, {
                            size: "xxlarge"
                        })), c && O.a.createElement(k.a, null, O.a.createElement(x.a, {
                            path: "/redirect",
                            component: nn
                        }), O.a.createElement(x.a, {
                            path: "/connected",
                            render: function() {
                                return O.a.createElement(tn, {
                                    base: "/connected",
                                    wrapper: e.contentWrapper
                                })
                            }
                        }), O.a.createElement(x.a, {
                            exact: !0,
                            path: "/providers",
                            component: rn
                        }), O.a.createElement(x.a, {
                            path: "/providers/:category",
                            component: rn
                        }), O.a.createElement(w.a, {
                            exact: !0,
                            from: "/",
                            to: "/connected"
                        }), O.a.createElement(w.a, {
                            from: "*",
                            to: "/connected"
                        })), O.a.createElement(pn, null), O.a.createElement(V.a, null)), u && O.a.createElement("div", {
                            className: "Timeline"
                        }, O.a.createElement("img", {
                            src: fn.a,
                            width: "420px"
                        })))
                    }
                }]), t
            }(_.Component);
        yn.contextTypes = {
            store: N.a.object
        };
        t.default = Object(D.a)(Object(H.a)(yn))
    },
    cXEB: function(e, t, n) {
        "use strict";
        var r = n("fvjX"),
            o = n("m+TH"),
            a = n("1mXj"),
            i = n("QCzH");
        var s = e => () => t => n => {
                const {
                    response: r
                } = n;
                switch (n.type) {
                    case "RECEIVE_DATA":
                    case "RECEIVE_NEW_DOCUMENT":
                        if (r && "io.cozy.konnectors" === n.doctype) {
                            const t = r.data;
                            t && t.length && t.forEach((e => t => {
                                const {
                                    langs: n,
                                    locales: r
                                } = t, o = n && n.length;
                                if (!o) return console.warn(`Konnector ${t.name} does not specify any lang`), t;
                                const a = o && n.includes(e) ? e : n[0],
                                    s = r && Object.keys(r);
                                return s && s.length && s.includes(a) ? (Object(i.a)({
                                    [t.slug]: r[a]
                                }), t) : (console.warn(`Konnector ${t.name} does not specify any locale for lang ${a}`), t)
                            })(e))
                        }
                }
                return t(n)
            },
            c = n("sINF");
        var u = n("oBqo"),
            l = n.n(u);

        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const p = (e, t) => function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    d(e, t, n[t])
                }))
            }
            return e
        }({}, e, e.attributes, {
            id: e._id,
            _type: t || e._type
        });
        class m {
            constructor(e, t, r = {}) {
                this.client = t, this.listener = null, this.options = r, this.categories = n("QxZi"), this.updateUnfinishedJob = this.updateUnfinishedJob.bind(this), this.onAccountCreated = this.onAccountCreated.bind(this), this.onAccountUpdated = this.onAccountUpdated.bind(this), this.onAccountDeleted = this.onAccountDeleted.bind(this), this.onTriggerCreated = this.onTriggerCreated.bind(this), this.onTriggerDeleted = this.onTriggerDeleted.bind(this), this.initializeRealtime()
            }
            initializeRealtime() {
                this.realtime = new l.a({
                    client: this.client
                }), this.realtime.subscribe("created", "io.cozy.jobs", this.updateUnfinishedJob), this.realtime.subscribe("updated", "io.cozy.jobs", this.updateUnfinishedJob), this.realtime.subscribe("created", "io.cozy.accounts", this.onAccountCreated), this.realtime.subscribe("updated", "io.cozy.accounts", this.onAccountUpdated), this.realtime.subscribe("deleted", "io.cozy.accounts", this.onAccountDeleted), this.realtime.subscribe("created", "io.cozy.triggers", this.onTriggerCreated), this.realtime.subscribe("deleted", "io.cozy.triggers", this.onTriggerDeleted)
            }
            async onAccountCreated(e) {
                this.dispatch({
                    type: "RECEIVE_NEW_DOCUMENT",
                    response: {
                        data: [p(e, "io.cozy.accounts")]
                    },
                    updateCollections: ["accounts"]
                })
            }
            async onAccountUpdated(e) {
                this.dispatch({
                    type: "RECEIVE_UPDATED_DOCUMENT",
                    response: {
                        data: [p(e, "io.cozy.accounts")]
                    },
                    updateCollections: ["accounts"]
                })
            }
            async onAccountDeleted(e) {
                this.dispatch({
                    type: "RECEIVE_DELETED_DOCUMENT",
                    response: {
                        data: [p(e, "io.cozy.accounts")]
                    },
                    updateCollections: ["accounts"]
                })
            }
            async onTriggerCreated(e) {
                this.dispatch({
                    type: "RECEIVE_NEW_DOCUMENT",
                    response: {
                        data: [p(e, "io.cozy.triggers")]
                    },
                    updateCollections: ["triggers"]
                })
            }
            async onTriggerUpdated(e) {
                this.dispatch({
                    type: "RECEIVE_UPDATED_DOCUMENT",
                    response: {
                        data: [p(e, "io.cozy.triggers")]
                    },
                    updateCollections: ["triggers"]
                })
            }
            async onTriggerDeleted(e) {
                this.dispatch({
                    type: "RECEIVE_DELETED_DOCUMENT",
                    response: {
                        data: [p(e, "io.cozy.triggers")]
                    },
                    updateCollections: ["triggers"]
                })
            }
            async updateUnfinishedJob(e) {
                const t = p(e, "io.cozy.jobs"),
                    n = "konnector" === t.worker,
                    r = !!t.account_deleted,
                    o = !t.trigger_id;
                if (!n || r || o) return;
                this.dispatch({
                    type: "RECEIVE_NEW_DOCUMENT",
                    response: {
                        data: [t]
                    },
                    updateCollections: ["jobs"]
                });
                const a = await async function(e, t) {
                    return e.fetchJSON("GET", `/jobs/triggers/${t}`)
                }(cozy.client, t.trigger_id);
                this.onTriggerUpdated(a)
            }
            createIntentService(e, t) {
                return cozy.client.intents.createService(e, t)
            }
            fetchUrls() {
                return cozy.client.fetchJSON("GET", "/apps/").then(e => {
                    e.forEach(e => {
                        if (e.attributes && e.attributes.slug && e.links) switch (e.attributes.slug) {
                            case "banks":
                                this.banksUrl = `${e.links.related}`
                        }
                    })
                }).catch(e => (console.warn(e.message), !1))
            }
        }
        var f = n("kdbL"),
            h = n.n(f),
            y = n("cokx");
        t.a = (e, t, n, i = {}) => {
            const u = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || r.compose,
                l = Object(r.createStore)(Object(y.a)(), u(r.applyMiddleware.apply(void 0, [Object(o.e)(e), s(i.lang), c.default, h()("redux-logger") ? Object(a.createLogger)() : null].filter(Boolean))));
            return Object.assign(new m(n, t, i), l)
        }
    },
    cokx: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return p
        })), n.d(t, "c", (function() {
            return m
        })), n.d(t, "d", (function() {
            return f
        })), n.d(t, "f", (function() {
            return h
        })), n.d(t, "g", (function() {
            return y
        })), n.d(t, "h", (function() {
            return g
        })), n.d(t, "i", (function() {
            return b
        })), n.d(t, "b", (function() {
            return E
        }));
        var r = n("fvjX"),
            o = n("mwIZ"),
            a = n.n(o),
            i = n("m+TH"),
            s = n("/n/j"),
            c = n("3dAU"),
            u = n("uZd2"),
            l = n("rGvZ"),
            d = n("4YEU");
        t.a = () => Object(r.combineReducers)({
            apps: s.a,
            connections: d.a,
            cozy: i.j
        });
        const p = e => u.c(e.cozy),
            m = e => d.j(e.connections, u.b(e.cozy)),
            f = e => c.b(e.cozy, d.f(e.connections)),
            h = (e, t) => l.b(e.cozy, t, c.c(e.cozy)).length,
            y = (e, t, n) => {
                const r = d.k(e.connections, t, n, c.c(e.cozy));
                return l.c(e.cozy, r)
            },
            g = (e, t) => {
                const n = e.cozy.documents["io.cozy.triggers"] || {};
                return Object.keys(n).reduce((n, r) => {
                    const o = e.cozy.documents["io.cozy.triggers"][r];
                    return "konnector" === o.worker && a()(o, "message.konnector") === t && n.push(o), n
                }, [])
            },
            b = e => {
                const t = a()(e, ["cozy", "documents", "io.cozy.triggers"], {});
                return Object.values(t).filter(e => "errored" === a()(e, "current_state.status"))
            },
            E = e => {
                const t = b(e).map(e => a()(e, "message.account")),
                    n = a()(e, ["cozy", "documents", "io.cozy.accounts"], {});
                return Object.values(n).filter(({
                    _id: e
                }) => t.includes(e))
            }
    },
    iUaz: function(e, t, n) {
        var r = {
            "./en-SG": "zavE",
            "./en-SG.js": "zavE",
            "./en-au": "Dmvi",
            "./en-au.js": "Dmvi",
            "./en-ca": "OIYi",
            "./en-ca.js": "OIYi",
            "./en-gb": "Oaa7",
            "./en-gb.js": "Oaa7",
            "./en-ie": "4dOw",
            "./en-ie.js": "4dOw",
            "./en-il": "czMo",
            "./en-il.js": "czMo",
            "./en-nz": "b1Dy",
            "./en-nz.js": "b1Dy",
            "./es": "iYuL",
            "./es-do": "CjzT",
            "./es-do.js": "CjzT",
            "./es-us": "Vclq",
            "./es-us.js": "Vclq",
            "./es.js": "iYuL",
            "./fr": "nyYc",
            "./fr-ca": "2fjn",
            "./fr-ca.js": "2fjn",
            "./fr-ch": "Dkky",
            "./fr-ch.js": "Dkky",
            "./fr.js": "nyYc"
        };

        function o(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        o.keys = function() {
            return Object.keys(r)
        }, o.resolve = a, e.exports = o, o.id = "iUaz"
    },
    kGy0: function(e, t, n) {
        var r = {
            "./en.json": "8WAw",
            "./fr.json": "H488"
        };

        function o(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        o.keys = function() {
            return Object.keys(r)
        }, o.resolve = a, e.exports = o, o.id = "kGy0"
    },
    "m+TH": function(e, t, n) {
        "use strict";
        var r = n("lwsE"),
            o = n.n(r),
            a = n("W8MJ"),
            i = n.n(a),
            s = n("a1gu"),
            c = n.n(s),
            u = n("Nsbk"),
            l = n.n(u),
            d = n("7W2i"),
            p = n.n(d),
            m = n("lSNA"),
            f = n.n(m),
            h = n("q1tI"),
            y = n.n(h),
            g = n("17x9"),
            b = n.n(g),
            E = function(e) {
                function t() {
                    return o()(this, t), c()(this, l()(t).apply(this, arguments))
                }
                return p()(t, e), i()(t, [{
                    key: "getChildContext",
                    value: function() {
                        return {
                            domain: this.props.domain,
                            secure: this.props.secure,
                            store: this.props.store || this.context.store,
                            client: this.props.client
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.children || null
                    }
                }]), t
            }(h.Component);

        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    _(e, t, n[t])
                }))
            }
            return e
        }

        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        f()(E, "propTypes", {
            domain: b.a.string,
            secure: b.a.bool,
            store: b.a.shape({
                subscribe: b.a.func.isRequired,
                dispatch: b.a.func.isRequired,
                getState: b.a.func.isRequired
            }),
            client: b.a.object.isRequired,
            children: b.a.element.isRequired
        }), f()(E, "childContextTypes", {
            domain: b.a.string,
            secure: b.a.bool,
            store: b.a.object,
            client: b.a.object.isRequired
        }), f()(E, "contextTypes", {
            store: b.a.object
        });
        class O {
            async fetchApps(e = 0) {
                const {
                    data: t,
                    meta: n
                } = await cozy.client.fetchJSON("GET", "/apps/", null, {
                    processJSONAPI: !1
                });
                return {
                    data: t || [],
                    meta: n,
                    skip: e,
                    next: !!n && n.count > e + 50
                }
            }
            async fetchDocuments(e) {
                try {
                    const t = await cozy.client.fetchJSON("GET", `/data/${e}/_all_docs?include_docs=true`);
                    return {
                        data: t.rows.filter(e => !e.doc.hasOwnProperty("views")).map(t => Object.assign({}, t.doc, {
                            id: t.id,
                            _type: e
                        })),
                        meta: {
                            count: t.total_rows
                        },
                        skip: t.offset,
                        next: !1
                    }
                } catch (t) {
                    if (t.message.match(/not_found/)) return {
                        data: [],
                        meta: {
                            count: 0
                        },
                        skip: 0,
                        next: !1
                    };
                    throw t
                }
            }
            async queryDocuments(e, t, n) {
                const r = n.fields,
                    o = n.skip || 0,
                    a = n.sort ? t.fields.map(e => ({
                        [e]: n.sort[e] || "desc"
                    })) : void 0,
                    i = v({
                        limit: 50,
                        wholeResponse: !0
                    }, n, {
                        fields: [...r, "_id", "_type", "class"],
                        skip: o,
                        sort: a
                    });
                let s, c, u;
                if ("io.cozy.files" === e) {
                    const n = await cozy.client.files.query(t, i);
                    s = n.data.map(t => Object.assign({
                        _id: t.id,
                        _type: e
                    }, t, t.attributes)), c = n.meta, u = c.count > o + 50
                } else {
                    const n = await cozy.client.data.query(t, i);
                    s = n.docs.map(t => Object.assign({
                        id: t._id,
                        _type: e
                    }, t)), c = {}, u = n.next
                }
                return {
                    data: s,
                    meta: c,
                    next: u
                }
            }
            async fetchDocument(e, t) {
                const n = await cozy.client.data.find(e, t);
                return {
                    data: [v({}, n, {
                        id: n._id,
                        _type: n._type
                    })]
                }
            }
            init(e) {
                this.config = v({}, e)
            }
            async createDocument(e, t) {
                const n = await cozy.client.data.create(e, t);
                return {
                    data: [v({}, n, {
                        id: n._id,
                        _type: e
                    })]
                }
            }
            async createTrigger(e) {
                const t = await cozy.client.fetchJSON("POST", "/jobs/triggers", {
                    data: e
                });
                return {
                    data: [v({}, t, t.attributes, {
                        id: t._id
                    })]
                }
            }
            async launchTrigger(e) {
                const t = await cozy.client.fetchJSON("POST", `/jobs/triggers/${e._id}/launch`);
                return {
                    data: [v({}, t, t.attributes, {
                        id: t._id
                    })]
                }
            }
            async updateDocument(e) {
                return {
                    data: [v({}, e, {
                        _rev: (await cozy.client.data.updateAttributes(e._type, e.id, e))._rev
                    })]
                }
            }
            async deleteDocument(e) {
                return await cozy.client.data.delete(e._type, e), {
                    data: [e]
                }
            }
            async deleteTrigger(e) {
                return await cozy.client.fetchJSON("DELETE", `/jobs/triggers/${e._id}`), {
                    data: [e]
                }
            }
            createIndex(e, t) {
                return cozy.client.data.defineIndex(e, t)
            }
            async fetchFileByPath(e) {
                try {
                    const t = await cozy.client.files.statByPath(e);
                    return {
                        data: [C(t)]
                    }
                } catch (t) {
                    return null
                }
            }
            async createFile(e, t) {
                const n = await cozy.client.files.create(e, {
                    dirID: t
                });
                return {
                    data: [C(n)]
                }
            }
            async trashFile(e) {
                return cozy.client.files.trashById(e.id), {
                    data: [e]
                }
            }
            async fetchReferencedFiles(e, t = 0) {
                const n = v({}, e, {
                        _id: e.id
                    }),
                    {
                        included: r,
                        meta: o
                    } = await cozy.client.data.fetchReferencedFiles(n, {
                        skip: t,
                        limit: 50
                    });
                return {
                    data: r ? r.map(e => v({}, e, e.attributes, {
                        _type: "io.cozy.files"
                    })) : [],
                    meta: o,
                    next: o.count > t + 50,
                    skip: t
                }
            }
            async fetchKonnectors(e = 0) {
                const {
                    data: t,
                    meta: n
                } = await cozy.client.fetchJSON("GET", "/konnectors/", null, {
                    processJSONAPI: !1
                });
                return {
                    data: t ? t.map(e => v({}, e, e.attributes, {
                        _type: "io.cozy.konnectors"
                    })) : [],
                    meta: n,
                    skip: e,
                    next: !!n && n.count > e + 50
                }
            }
            async fetchTriggers(e, t = 0) {
                const {
                    data: n,
                    meta: r
                } = await cozy.client.fetchJSON("GET", `/jobs/triggers?Worker=${e}`, null, {
                    processJSONAPI: !1
                });
                return {
                    data: n ? n.map(e => v({}, e, e.attributes, {
                        _type: "io.cozy.triggers"
                    })) : [],
                    meta: r,
                    skip: t,
                    next: !!r && r.count > t + 50
                }
            }
            async addReferencedFiles(e, t) {
                return await cozy.client.data.addReferencedFiles(e, t), t
            }
            async removeReferencedFiles(e, t) {
                const n = v({}, e, {
                    _id: e.id
                });
                return await cozy.client.data.removeReferencedFiles(n, t), t
            }
            async fetchSharingPermissions(e) {
                const t = (e, t) => cozy.client.fetchJSON("GET", `/permissions/doctype/${e}/${t}`);
                return {
                    byMe: await t(e, "sharedWithOthers"),
                    byLink: await t(e, "sharedByLink"),
                    withMe: await t(e, "sharedWithMe")
                }
            }
            fetchSharing(e) {
                return cozy.client.fetchJSON("GET", `/sharings/${e}`)
            }
            createSharing(e, t, n, r) {
                return cozy.client.fetchJSON("POST", "/sharings/", {
                    desc: r,
                    permissions: e,
                    recipients: t.map(e => ({
                        recipient: {
                            id: e,
                            type: "io.cozy.contacts"
                        }
                    })),
                    sharing_type: n
                })
            }
            revokeSharing(e) {
                return cozy.client.fetchJSON("DELETE", `/sharings/${e}`)
            }
            revokeSharingForClient(e, t) {
                return cozy.client.fetchJSON("DELETE", `/sharings/${e}/recipient/${t}`)
            }
            createSharingLink(e) {
                return cozy.client.fetchJSON("POST", "/permissions?codes=email", {
                    data: {
                        type: "io.cozy.permissions",
                        attributes: {
                            permissions: e
                        }
                    }
                })
            }
            revokeSharingLink(e) {
                return cozy.client.fetchJSON("DELETE", `/permissions/${e._id}`)
            }
        }
        const C = e => v({}, e, e.attributes, {
            id: e._id
        });

        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    k(e, t, n[t])
                }))
            }
            return e
        }

        function k(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const x = {
                syncStatus: "pending",
                lastSync: null,
                seqNumber: 0
            },
            w = (e = x, t) => {
                switch (t.type) {
                    case "START_DOCTYPE_SYNC":
                        return N({}, e, {
                            syncStatus: "syncing",
                            seqNumber: t.seqNumber
                        });
                    case "SYNC_DOCTYPE_OK":
                        return N({}, e, {
                            syncStatus: "done",
                            lastSync: Date.now()
                        });
                    case "SYNC_DOCTYPE_ERROR":
                        return N({}, e, {
                            syncStatus: "error",
                            lastSync: Date.now()
                        });
                    default:
                        return e
                }
            };
        var D = (e = {}, t) => {
            switch (t.type) {
                case "START_DOCTYPE_SYNC":
                case "SYNC_DOCTYPE_OK":
                case "SYNC_DOCTYPE_ERROR":
                    return N({}, e, {
                        [t.doctype]: w(e[t.doctype], t)
                    });
                default:
                    return e
            }
        };
        const z = (e, t = 0) => ({
            type: "START_DOCTYPE_SYNC",
            doctype: e,
            seqNumber: t
        });

        function T(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }

        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    A(e, t, n[t])
                }))
            }
            return e
        }

        function A(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        class L {
            constructor() {
                PouchDB.plugin(pouchdbFind), this.instances = {}, this.doctypes = []
            }
            registerDoctypes(e) {
                this.doctypes = e
            }
            getDatabase(e) {
                return cozy.client.offline.getDatabase(e)
            }
            getReplicationBaseUrl() {
                return cozy.client.authorize().then(e => {
                    const t = e.token.toBasicAuth();
                    return `${cozy.client._url}/data/`.replace("//", `//${t}`)
                })
            }
            getSeqNumber(e) {
                return this.getDatabase(e).info().then(e => e.update_seq)
            }
            async sync(e, t = "SYNC_BIDIRECTIONAL") {
                const n = await this.getReplicationBaseUrl();
                for (let r of this.doctypes) {
                    const o = await this.getSeqNumber(r);
                    await e(z(r, o)), this.syncDoctype(r, `${n}${r}`, e, t)
                }
            }
            syncDoctype(e, t, n, r = "SYNC_BIDIRECTIONAL") {
                return new Promise((o, a) => {
                    const i = this.getDatabase(e);
                    let s;
                    s = "SYNC_TO" === r ? i.replicate.to(t) : "SYNC_FROM" === r ? i.replicate.from(t) : i.sync(t), s.on("complete", a => {
                        n(((e, t) => ({
                            type: "SYNC_DOCTYPE_OK",
                            doctype: e,
                            infos: t
                        }))(e, a)), this.scheduleNextSync(e, t, n, r), o(a)
                    }).on("error", r => {
                        if ("code=400, message=Expired token" === r.error) return cozy.client.authorize().then(({
                            client: n,
                            token: r
                        }) => {
                            cozy.client.auth.refreshToken(cozy, n, r).then(e => cozy.client.saveCredentials(n, e)).then(() => this.syncDoctype(e, t))
                        });
                        404 !== r.status && (n(((e, t) => ({
                            type: "SYNC_DOCTYPE_ERROR",
                            doctype: e,
                            error: t
                        }))(e, r)), this.scheduleNextSync(e, t, n), a(r))
                    })
                })
            }
            scheduleNextSync(e, t, n, r) {
                setTimeout(() => {
                    this.syncDoctype(e, t, n, r)
                }, 3e4)
            }
            async fetchDocuments(e) {
                const t = await this.getDatabase(e).allDocs({
                    include_docs: !0
                });
                return {
                    data: t.rows.filter(e => !e.doc.hasOwnProperty("views")).map(t => S({}, t.doc, {
                        id: t.id,
                        _type: e
                    })),
                    meta: {
                        count: t.total_rows
                    },
                    skip: t.offset,
                    next: !1
                }
            }
            async queryDocuments(e, t, n) {
                const r = S({}, n, {
                        fields: [...n.fields, "_id"],
                        sort: n.sort ? Object.keys(n.sort).map(e => ({
                            [e]: n.sort[e]
                        })) : void 0
                    }),
                    o = await this.getDatabase(e).find(r);
                return {
                    data: o.docs.map(t => S({}, t, {
                        id: t._id,
                        _type: e
                    })),
                    meta: {
                        count: o.docs.length
                    },
                    skip: 0,
                    next: !1
                }
            }
            async fetchDocument(e, t) {
                const n = await this.getDatabase(e).get(t, {
                    revs_info: !0
                });
                return {
                    data: [S({}, n, {
                        id: n.id,
                        _id: n.id,
                        _type: e
                    })]
                }
            }
            async createDocument(e, t) {
                const n = await this.getDatabase(e).post(t);
                return {
                    data: [S({}, t, {
                        id: n.id,
                        _id: n.id,
                        _type: e,
                        _rev: n.rev
                    })]
                }
            }
            async updateDocument(e) {
                const {
                    _type: t
                } = e, n = T(e, ["_type"]);
                return {
                    data: [S({}, e, {
                        _rev: (await this.getDatabase(t).put(n)).rev
                    })]
                }
            }
            async deleteDocument(e) {
                return await this.getDatabase(e._type).remove(e), {
                    data: [e]
                }
            }
            createIndex(e, t) {
                return this.getDatabase(e).createIndex({
                    index: {
                        fields: t
                    }
                })
            }
            fetchFileByPath() {
                throw new Error("Not implemented")
            }
            createFile() {
                throw new Error("Not implemented")
            }
            trashFile() {
                throw new Error("Not implemented")
            }
            fetchReferencedFiles() {
                throw new Error("Not implemented")
            }
            addReferencedFiles() {
                throw new Error("Not implemented")
            }
            removeReferencedFiles() {
                throw new Error("Not implemented")
            }
        }

        function R(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        class I {
            constructor() {
                this.stackAdapter = new O, "undefined" != typeof PouchDB ? (this.pouchAdapter = new L, this.strategy = new j) : this.strategy = new q
            }
            setup(e, t) {
                const n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? Object(arguments[t]) : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            R(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    cozyURL: e
                }, t);
                cozy.client.init(n), this.stackAdapter.init(n), n.offline && this.pouchAdapter.registerDoctypes(n.offline.doctypes)
            }
            getAdapter(e) {
                return this.strategy.getAdapter(e, this.stackAdapter, this.pouchAdapter)
            }
            startSync(e) {
                return this.pouchAdapter.sync(e, "SYNC_BIDIRECTIONAL")
            }
            startReplicationTo(e) {
                return this.pouchAdapter.sync(e, "SYNC_TO")
            }
            startReplicationFrom(e) {
                return this.pouchAdapter.sync(e, "SYNC_FROM")
            }
        }
        class j {
            getAdapter(e, t, n) {
                return void 0 === n.getDatabase(e) ? t : n
            }
        }
        class q {
            getAdapter(e, t) {
                return t
            }
        }
        const M = e => void 0 !== window.cordova && void 0 !== window.cordova.InAppBrowser ? new Promise((t, n) => {
            const r = window.cordova.InAppBrowser.open(e, "_blank", "clearcache=yes,zoom=no"),
                o = () => {
                    r.removeEventListener("loadstart", a), r.removeEventListener("exit", i)
                },
                a = ({
                    url: e
                }) => {
                    const n = /\?access_code=(.+)$/.test(e),
                        a = /\?state=(.+)$/.test(e);
                    (n || a) && (t(e), o(), r.close())
                },
                i = () => {
                    n(new Error("REGISTRATION_ABORT")), o(), r.close()
                };
            r.addEventListener("loadstart", a), r.addEventListener("exit", i)
        }) : new Promise(e => {
            setTimeout(() => {
                const t = prompt("Paste the url here:");
                e(t)
            }, 1e4)
        });

        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    U(e, t, n[t])
                }))
            }
            return e
        }

        function U(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function F(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        class V {
            constructor(e) {
                const {
                    cozyURL: t
                } = e, n = F(e, ["cozyURL"]);
                this.options = n, this.indexes = {}, this.specialDirectories = {}, this.facade = new I, t && this.facade.setup(t, n)
            }
            register(e) {
                return this.facade.setup(e, P({}, this.options, {
                    oauth: P({}, this.options.oauth, {
                        onRegistered: (e, t) => M(t)
                    })
                })), cozy.client.authorize(!0)
            }
            async isRegistered(e) {
                if (!e) return !1;
                try {
                    return await cozy.client.auth.getClient(e), !0
                } catch (t) {
                    return "Failed to fetch" === t.message || (console.warn(t), !1)
                }
            }
            startSync(e) {
                return this.facade.startSync(e)
            }
            startReplicationTo(e) {
                return this.facade.startReplicationTo(e)
            }
            startReplicationFrom(e) {
                return this.facade.startReplicationFrom(e)
            }
            getAdapter(e) {
                return this.facade.getAdapter(e)
            }
            async fetchApps() {
                return this.getAdapter("io.cozy.apps").fetchApps()
            }
            async fetchCollection(e, t, n = {}, r = 0) {
                if (n.selector) {
                    const o = await this.getCollectionIndex(e, t, n);
                    return this.getAdapter(t).queryDocuments(t, o, P({}, n, {
                        skip: r
                    }))
                }
                return this.getAdapter(t).fetchDocuments(t)
            }
            fetchDocument(e, t) {
                return this.getAdapter(e).fetchDocument(e, t)
            }
            fetchFile(e) {
                return this.getAdapter("io.cozy.files").fetchFile(e)
            }
            fetchReferencedFiles(e, t = 0) {
                return this.getAdapter(e._type).fetchReferencedFiles(e, t)
            }
            fetchTriggers(e, t) {
                return this.getAdapter("io.cozy.triggers").fetchTriggers(t)
            }
            fetchKonnectors() {
                return this.getAdapter("io.cozy.konnectors").fetchKonnectors()
            }
            addReferencedFiles(e, t) {
                return this.getAdapter(e._type).addReferencedFiles(e, t)
            }
            removeReferencedFiles(e, t) {
                return this.getAdapter(e._type).removeReferencedFiles(e, t)
            }
            createDocument(e, t) {
                return this.getAdapter(e).createDocument(e, t)
            }
            createTrigger(e) {
                return this.getAdapter(e._type).createTrigger(e)
            }
            launchTrigger(e) {
                return this.getAdapter(e._type).launchTrigger(e)
            }
            updateDocument(e) {
                return this.getAdapter(e._type).updateDocument(e)
            }
            deleteDocument(e) {
                return this.getAdapter(e._type).deleteDocument(e)
            }
            deleteTrigger(e) {
                return this.getAdapter(e._type).deleteTrigger(e)
            }
            async fetchSharings(e) {
                const t = await this.getAdapter(e).fetchSharingPermissions(e),
                    n = [...t.byMe.map(e => e.attributes.source_id), ...t.withMe.map(e => e.attributes.source_id)];
                return {
                    permissions: t,
                    sharings: await Promise.all(n.map(e => this.getAdapter("io.cozy.sharings").fetchSharing(e)))
                }
            }
            createSharing(e, t, n, r) {
                return this.getAdapter("io.cozy.sharings").createSharing(e, t, n, r)
            }
            revokeSharing(e) {
                return this.getAdapter("io.cozy.sharings").revokeSharing(e)
            }
            revokeSharingForClient(e, t) {
                return this.getAdapter("io.cozy.sharings").revokeSharingForClient(e, t)
            }
            createSharingLink(e) {
                return this.getAdapter("io.cozy.sharings").createSharingLink(e)
            }
            revokeSharingLink(e) {
                return this.getAdapter("io.cozy.sharings").revokeSharingLink(e)
            }
            createFile(e, t) {
                return this.getAdapter("io.cozy.files").createFile(e, t)
            }
            trashFile(e) {
                return this.getAdapter("io.cozy.files").trashFile(e)
            }
            async ensureDirectoryExists(e) {
                if (!this.specialDirectories[e]) {
                    const t = await cozy.client.files.createDirectoryByPath(e);
                    this.specialDirectories[e] = t._id
                }
                return this.specialDirectories[e]
            }
            async checkUniquenessOf(e, t, n) {
                const r = await this.getUniqueIndex(e, t);
                return 0 === (await cozy.client.data.query(r, {
                    selector: {
                        [t]: n
                    },
                    fields: ["_id"]
                })).length
            }
            async getCollectionIndex(e, t, n) {
                return this.indexes[e] || (this.indexes[e] = await this.getAdapter(t).createIndex(t, this.getIndexFields(n))), this.indexes[e]
            }
            async getUniqueIndex(e, t) {
                const n = `${e}/${t}`;
                return this.indexes[n] || (this.indexes[n] = await this.getAdapter(e).createIndex(e, [t])), this.indexes[n]
            }
            getIndexFields(e) {
                const {
                    selector: t,
                    sort: n
                } = e;
                return n ? [...Object.keys(t), ...Object.keys(n)].filter((e, t, n) => n.indexOf(e) === t) : Object.keys(t)
            }
        }
        var Y = n("MVZn"),
            G = n.n(Y),
            H = n("/MKj");
        const W = (e, t) => {
                let n = {};
                for (const r in e) n[r] = t(e[r], r);
                return n
            },
            K = (e, t) => {
                let n = {};
                for (const r in e) t(e[r], r) && (n[r] = e[r]);
                return n
            };
        var B = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return function(n) {
                var r = function(e) {
                    function t() {
                        return o()(this, t), c()(this, l()(t).apply(this, arguments))
                    }
                    return p()(t, e), i()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.fetchActions,
                                t = this.context.store.dispatch;
                            for (var n in e) t(e[n])
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.context.store,
                                t = this.props.fetchActions,
                                r = G()({}, this.props, ze(this.props, t, e.dispatch));
                            return y.a.createElement(n, r)
                        }
                    }]), t
                }(h.Component);
                f()(r, "contextTypes", {
                    store: b.a.object
                });
                return Object(H.connect)((function(t, n) {
                    var r = e(n),
                        o = function(e) {
                            return e && e.types && e.promise
                        },
                        a = K(r, (function(e) {
                            return o(e)
                        })),
                        i = K(r, (function(e) {
                            return !o(e)
                        }));
                    return function(e) {
                        return G()({}, W(a, (function(t) {
                            return o(t) ? De(e, t) : t
                        })), {
                            fetchActions: a
                        }, i)
                    }
                }), t)(r)
            }
        };

        function Q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    J(e, t, n[t])
                }))
            }
            return e
        }

        function J(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function X(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        var Z = e => ({
                dispatch: t
            }) => n => r => {
                const {
                    promise: o,
                    type: a,
                    types: i
                } = r, s = X(r, ["promise", "type", "types"]);
                if (!o) return n(r);
                if (!a && !i) return o(e).then(e => t(e));
                if (a) return o(e).then(e => (n(Q({}, s, {
                    response: e,
                    type: a
                })), e));
                const [c, u, l] = i;
                return n(Q({}, s, {
                    type: c
                })), o(e).then(e => (n(Q({}, s, {
                    response: e,
                    type: u
                })), e), e => {
                    console.log(e), n(Q({}, s, {
                        error: e,
                        type: l
                    }))
                }).catch(e => {
                    console.error("MIDDLEWARE ERROR:", e), n(Q({}, s, {
                        error: e,
                        type: l
                    }))
                })
            },
            $ = n("fvjX");
        n("4kcP");

        function ee(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    te(e, t, n[t])
                }))
            }
            return e
        }

        function te(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const ne = (e, t) => {
                const n = e.findIndex(e => e.recipient.id === t);
                return [...e.slice(0, n), ...e.slice(n + 1)]
            },
            re = {
                fetchStatus: "loading",
                byMe: [],
                byLink: [],
                withMe: []
            };
        var oe = Object($.combineReducers)({
            documents: (e = [], t) => {
                switch (t.type) {
                    case "RECEIVE_SHARINGS_DATA":
                        return t.response.sharings;
                    case "RECEIVE_NEW_SHARING":
                        return [...e, t.response];
                    case "RECEIVE_SHARING_REVOKE": {
                        const n = e.findIndex(e => e.attributes.sharing_id === t.sharingId);
                        if (-1 === n) return e;
                        const r = e[n],
                            o = ee({}, r, void 0 === r.attributes.recipients || 1 === r.attributes.recipients.length ? {
                                attributes: ee({}, r.attributes, {
                                    revoked: !0
                                })
                            } : {
                                attributes: ee({}, r.attributes, {
                                    recipients: ne(r.attributes.recipients, t.recipientId)
                                })
                            });
                        return [...e.slice(0, n), o, ...e.slice(n + 1)]
                    }
                    default:
                        return e
                }
            },
            permissions: (e = {}, t) => {
                let n;
                switch (t.type) {
                    case "FETCH_SHARINGS":
                        return e[t.doctype] ? ee({}, e, {
                            [t.doctype]: ee({}, e[t.doctype], {
                                fetchStatus: "loading"
                            })
                        }) : ee({}, e, {
                            [t.doctype]: re
                        });
                    case "RECEIVE_SHARINGS_DATA":
                        return ee({}, e, {
                            [t.doctype]: ee({
                                fetchStatus: "loaded"
                            }, t.response.permissions)
                        });
                    case "RECEIVE_FETCH_SHARINGS_ERROR":
                        return ee({}, e, {
                            [t.doctype]: {
                                fetchStatus: "error"
                            }
                        });
                    case "RECEIVE_NEW_SHARING":
                        return ee({}, e, {
                            [t.doctype]: ee({}, e[t.doctype], {
                                byMe: [...e[t.doctype].byMe, {
                                    attributes: {
                                        permissions: {
                                            rule0: {
                                                type: t.doctype,
                                                values: [t.id]
                                            }
                                        },
                                        source_id: t.response.attributes.sharing_id,
                                        type: "io.cozy.sharings"
                                    }
                                }]
                            })
                        });
                    case "RECEIVE_NEW_SHARING_LINK":
                        return ee({}, e, {
                            [t.doctype]: ee({}, e[t.doctype], {
                                byLink: [...e[t.doctype].byLink, t.response]
                            })
                        });
                    case "REVOKE_SHARING_LINK":
                        return n = e[t.doctype].byLink.findIndex(e => t.permission._id === e._id), -1 === n ? e : ee({}, e, {
                            [t.doctype]: ee({}, e[t.doctype], {
                                byLink: [...e[t.doctype].byLink.slice(0, n), ...e[t.doctype].byLink.slice(n + 1)]
                            })
                        });
                    default:
                        return e
                }
            }
        });
        const ae = (e, t) => Ae(e, "io.cozy.contacts", t),
            ie = (e, t) => e.cozy.sharings.permissions[t] ? e.cozy.sharings.permissions[t] : re,
            se = (e, t, n) => {
                const r = ie(e, t),
                    o = pe({
                        _type: t
                    }) ? "files" : "collection";
                return r.byLink.find(e => -1 !== e.attributes.permissions[o].values.indexOf(n))
            },
            ce = (e, t, n) => {
                const r = ie(e, t);
                return [...r.byMe.filter(e => -1 !== e.attributes.permissions.rule0.values.indexOf(n)), ...r.withMe.filter(e => -1 !== e.attributes.permissions.rule0.values.indexOf(n))].map(t => ((e, t) => e.cozy.sharings.documents.find(e => e.attributes.sharing_id === t))(e, t.attributes.source_id)).filter(e => !e.attributes.revoked)
            },
            ue = (e, t, n) => {
                const {
                    shared: r,
                    owner: o,
                    sharingType: a,
                    sharings: i
                } = ((e, t, n) => {
                    const r = ce(e, t, n);
                    return {
                        shared: 0 !== r.length,
                        owner: 0 === r.length || r.some(e => !0 === e.attributes.owner),
                        sharingType: r.some(e => "master-master" === e.attributes.sharing_type) ? "master-master" : "master-slave",
                        sharings: r
                    }
                })(e, t, n), s = ((e, t, n) => {
                    const r = se(e, t, n);
                    return r ? de(n, t, r.attributes.codes.email) : null
                })(e, t, n);
                return {
                    shared: r,
                    owner: o,
                    sharingType: a,
                    sharingLink: s,
                    sharer: r && !o ? {
                        name: "John Doe",
                        url: i[0].attributes.sharer.url
                    } : null,
                    readOnly: !o && "master-slave" === a,
                    recipients: r && o ? le(e, i) : [],
                    byMe: r && !0 === o,
                    withMe: r && !o,
                    byLink: !!s
                }
            },
            le = (e, t) => t.filter(e => e.attributes.recipients).map(t => t.attributes.recipients.map(n => ({
                contact: ae(e, n.recipient.id),
                status: n.status,
                type: t.attributes.sharing_type
            }))).reduce((e, t) => e.concat(t), []),
            de = (e, t, n) => `${window.location.origin}/public?sharecode=${n}&id=${e}${"file"===t?"&directdownload":""}`,
            pe = ({
                _type: e,
                type: t
            }) => "io.cozy.files" === e || "directory" === t || "file" === t;

        function me(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }

        function fe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function(t) {
                    he(e, t, n[t])
                }))
            }
            return e
        }

        function he(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const ye = e => e.reduce((e, t) => fe({}, e, {
                [t.id]: t
            }), {}),
            ge = (e, t) => {
                let {
                    relationships: {
                        referenced_by: n
                    }
                } = e, r = me(e.relationships, ["referenced_by"]);
                return fe({}, me(e, ["relationships"]), {
                    relationships: fe({}, r, {
                        [n.data]: null === n.data ? [{
                            id: t.id,
                            type: t.type
                        }] : [...n.data, {
                            id: t.id,
                            type: t.type
                        }]
                    })
                })
            },
            be = (e, t, n) => t.reduce((t, r) => fe({}, t, {
                [r]: ge(e[r], n)
            }), {}),
            Ee = (e, t) => {
                let {
                    relationships: {
                        referenced_by: n
                    }
                } = e, r = me(e.relationships, ["referenced_by"]);
                return fe({}, me(e, ["relationships"]), {
                    relationships: fe({}, r, {
                        [n.data]: n.data.filter(e => e.type !== t.type && e.id !== t.id)
                    })
                })
            },
            ve = (e, t, n) => t.reduce((t, r) => fe({}, t, {
                [r]: Ee(e[r], n)
            }), {}),
            _e = e => (({
                _type: e
            }) => "file" === e ? "io.cozy.files" : e)(e[0]),
            Oe = {
                type: null,
                options: {},
                fetchStatus: "pending",
                lastFetch: null,
                hasMore: !1,
                count: 0,
                ids: []
            },
            Ce = (e = Oe, t) => {
                switch (t.type) {
                    case "FETCH_COLLECTION":
                    case "FETCH_REFERENCED_FILES":
                        return fe({}, e, {
                            type: t.doctype || "io.cozy.files",
                            options: t.options,
                            fetchStatus: t.skip > 0 ? "loadingMore" : "loading"
                        });
                    case "RECEIVE_APP":
                    case "RECEIVE_DATA": {
                        const n = t.response;
                        return fe({}, e, {
                            fetchStatus: "loaded",
                            lastFetch: Date.now(),
                            hasMore: void 0 !== n.next ? n.next : e.hasMore,
                            count: n.meta && n.meta.count ? n.meta.count : n.data.length,
                            ids: t.skip ? [...e.ids, ...n.data.map(e => e.id)] : n.data.map(e => e.id)
                        })
                    }
                    case "ADD_REFERENCED_FILES":
                        return fe({}, e, {
                            type: "io.cozy.files",
                            count: e.count + t.ids.length,
                            ids: [...e.ids, ...t.ids]
                        });
                    case "REMOVE_REFERENCED_FILES":
                        return fe({}, e, {
                            count: e.count - t.ids.length,
                            ids: e.ids.filter(e => -1 === t.ids.indexOf(e))
                        });
                    case "RECEIVE_ERROR":
                        return fe({}, e, {
                            fetchStatus: "failed"
                        });
                    case "RECEIVE_NEW_DOCUMENT":
                        return fe({}, e, {
                            ids: [...e.ids, t.response.data[0].id]
                        });
                    case "RECEIVE_DELETED_DOCUMENT":
                        return fe({}, e, {
                            ids: e.ids.filter(e => e !== t.response.data[0].id)
                        });
                    default:
                        return e
                }
            };
        var Ne = Object($.combineReducers)({
            collections: (e = {}, t) => {
                switch (t.type) {
                    case "FETCH_COLLECTION":
                    case "FETCH_REFERENCED_FILES":
                    case "ADD_REFERENCED_FILES":
                    case "REMOVE_REFERENCED_FILES":
                    case "RECEIVE_APP":
                    case "RECEIVE_DATA":
                    case "RECEIVE_ERROR":
                        return t.collection ? fe({}, e, {
                            [t.collection]: Ce(e[t.collection], t)
                        }) : e;
                    case "RECEIVE_NEW_DOCUMENT":
                    case "RECEIVE_DELETED_DOCUMENT":
                        return t.updateCollections ? fe({}, e, ((e, n) => n.updateCollections.reduce((n, r) => fe({}, n, {
                            [r]: Ce(e[r], t)
                        }), {}))(e, t)) : e;
                    default:
                        return e
                }
            },
            documents: (e = {}, t) => {
                switch (t.type) {
                    case "RECEIVE_APP": {
                        const n = t.response && t.response.data;
                        return 0 === n.length ? e : fe({}, e, {
                            "io.cozy.apps": fe({}, e["io.cozy.apps"], ye(n))
                        })
                    }
                    case "RECEIVE_DATA": {
                        const {
                            data: n
                        } = t.response;
                        if (0 === n.length) return e;
                        const r = _e(n);
                        return fe({}, e, {
                            [r]: fe({}, e[r], ye(n))
                        })
                    }
                    case "RECEIVE_NEW_DOCUMENT":
                    case "RECEIVE_UPDATED_DOCUMENT": {
                        const n = t.response.data[0];
                        return fe({}, e, {
                            [n._type]: fe({}, e[n._type], {
                                [n.id]: n
                            })
                        })
                    }
                    case "RECEIVE_DELETED_DOCUMENT": {
                        const o = t.response.data[0];
                        return fe({}, e, {
                            [o._type]: (n = e[o._type], r = o.id, Object.keys(n).reduce((e, t) => (t !== r && (e[t] = n[t]), e), {}))
                        })
                    }
                    case "ADD_REFERENCED_FILES":
                        return fe({}, e, {
                            "io.cozy.files": fe({}, e["io.cozy.files"], be(e["io.cozy.files"], t.ids, t.document))
                        });
                    case "REMOVE_REFERENCED_FILES":
                        return fe({}, e, {
                            "io.cozy.files": fe({}, e["io.cozy.files"], ve(e["io.cozy.files"], t.ids, t.document))
                        });
                    default:
                        return e
                }
                var n, r
            },
            sharings: oe,
            synchronization: D
        });
        const ke = (e, t, n = {}, r = 0) => ({
                types: ["FETCH_COLLECTION", "RECEIVE_DATA", "RECEIVE_ERROR"],
                collection: e,
                doctype: t,
                options: n,
                skip: r,
                promise: o => o.fetchCollection(e, t, n, r)
            }),
            xe = (e, t, n = {}, r = 0) => ({
                types: ["FETCH_COLLECTION", "RECEIVE_DATA", "RECEIVE_ERROR"],
                collection: e,
                doctype: "io.cozy.triggers",
                options: n,
                skip: r,
                promise: o => o.fetchTriggers(e, t, n, r)
            }),
            we = (e, t = {}, n = 0) => ({
                types: ["FETCH_COLLECTION", "RECEIVE_DATA", "RECEIVE_ERROR"],
                collection: e,
                doctype: "io.cozy.konnectors",
                options: t,
                skip: n,
                promise: r => r.fetchKonnectors(e, t, n)
            }),
            De = (e, t) => {
                switch (t.types[0]) {
                    case "FETCH_COLLECTION":
                    case "FETCH_REFERENCED_FILES":
                        return Se(e, t.collection);
                    case "FETCH_DOCUMENT":
                        return Ae(e, t.doctype, t.id);
                    case "FETCH_SHARINGS":
                        return t.id ? ue(e, t.doctype, t.id, t.options) : ((e, t) => {
                            const n = ie(e, t),
                                r = "io.cozy.files" === t ? "files" : "collection";
                            return {
                                byMe: n.byMe.map(e => e.attributes.permissions.rule0.values[0]),
                                withMe: n.withMe.map(e => e.attributes.permissions.rule0.values[0]),
                                byLink: n.byLink.map(e => e.attributes.permissions[r].values[0])
                            }
                        })(e, t.doctype, t.options);
                    default:
                        return null
                }
            },
            ze = (e, t, n) => W(t, (t, r) => {
                const o = e[r];
                switch (t.types[0]) {
                    case "FETCH_COLLECTION":
                    case "FETCH_REFERENCED_FILES":
                        return fe({}, o, {
                            fetchMore: o.hasMore ? () => n((({
                                types: e,
                                collection: t,
                                document: n,
                                doctype: r,
                                options: o
                            }, a) => "FETCH_REFERENCED_FILES" === e[0] ? ((e, t = 0) => ({
                                types: ["FETCH_REFERENCED_FILES", "RECEIVE_DATA", "RECEIVE_ERROR"],
                                collection: `${e._type}/${e.id}#files`,
                                document: e,
                                options: {},
                                skip: t,
                                promise: n => n.fetchReferencedFiles(e, t)
                            }))(n, a) : ke(t, r, o, a))(t, o.data.length)) : null
                        });
                    default:
                        return o
                }
            }),
            Te = (e, t, n) => n.map(n => e[t][n]),
            Se = (e, t) => {
                const n = e.cozy.collections[t];
                return n ? fe({}, n, {
                    data: Te(e.cozy.documents, n.type, n.ids)
                }) : fe({}, Oe, {
                    data: null
                })
            },
            Ae = (e, t, n) => {
                const r = e.cozy.documents[t];
                return r ? r[n] : null
            };
        n.d(t, "b", (function() {
            return E
        })), n.d(t, "a", (function() {
            return V
        })), n.d(t, "d", (function() {
            return B
        })), n.d(t, "e", (function() {
            return Z
        })), n.d(t, "j", (function() {
            return Ne
        })), n.d(t, "g", (function() {
            return ke
        })), n.d(t, "h", (function() {
            return we
        })), n.d(t, "i", (function() {
            return xe
        })), n.d(t, "c", (function() {
            return De
        })), n.d(t, "f", (function() {
            return ze
        }))
    },
    mD6Q: function(e, t, n) {
        "use strict";
        var r = n("m+TH"),
            o = n("3dAU"),
            a = n("uZd2"),
            i = n("sR/t"),
            s = n("rGvZ"),
            c = n("kdbL");
        n.n(c)()("harvest.bi-konnector-policy", !0);
        var u = function() {
            return {
                accounts: Object(o.a)(),
                jobs: Object(i.a)(),
                konnectors: Object(a.a)(),
                triggers: Object(s.a)()
            }
        };
        t.a = function(e, t) {
            return Object(r.d)(u)(e, t)
        }
    },
    oway: function(e) {
        e.exports = {
            app: {
                logo: {
                    alt: "%{name} logo"
                }
            },
            date: {
                format: "DD/MM/YYYY",
                placeholder: "dd/mm/yyyy"
            },
            manifest: {
                name: "Inicio",
                short_description: "Cozy Collect es la aplicación que le ayuda a recopilar todos sus datos personales que están en Cozy.",
                long_description: "Con Cozy Collect, usted puede facilmente:\n* Descargar documentos de todos sus proveedores\n* Establecer la frecuencia con la que Cozy recopilará sus facturas\n* Acceder directoamente a los documentos recopilados por su Cozy",
                changes: "Seguro ya se ha dado cuenta, el Store ha llegado a su Cozy\nAprovechamos para mejorar Collect:\n*Adaptación a Store.\n*Fusión de fichas: cuando se tienen diversas cuentas en un proveedor, la primera se fusiona baja la ficha del proveedor.\n*Mejora de algunas páginas de Conectores."
            },
            add_service: "Añadir",
            fix_konnector_error: "Arreglar ahora",
            logout: "Cerrar sesión",
            help: "Ayuda",
            help_link: "https://help.cozy.io/",
            home_config_magic_folder: "V",
            account: {
                config: {
                    default_folder: "/Administrative/%{name}",
                    optional: "(Opcional)",
                    title: "Conecte su cuenta %{name} ",
                    data: {
                        title: "Datos recopilados:",
                        service: {
                            description: "Descripción del servicio:"
                        }
                    },
                    tabs: {
                        sync: "sincronización",
                        account: "cuenta",
                        data: "datos recopilados"
                    }
                },
                disconnect: {
                    title: "Desconexión",
                    description: "Usted se desconectará de esta cuenta, pero se guardarán los datos importados"
                },
                form: {
                    title: "Cuenta",
                    label: {
                        firstname: "Nombre",
                        lastname: "Apellido",
                        login: "Login",
                        consumerKey: "Clave del usuario",
                        consumerSecret: "Secreto del usuario",
                        appKey: "Clave de la aplicación",
                        appSecret: "Secreto de la aplicación",
                        tricountUrl: "URL Tricount",
                        cardNumber: "Número de tarjeta",
                        dob: "Fecha de nacimiento",
                        password: "Contraseña",
                        email: "Email",
                        bank_identifier: "Identificante bancario (opcional)",
                        profileName: "Nombre del perfil",
                        identifier: "Identificador",
                        new_identifier: "Identificador",
                        secret: "Contraseña",
                        answer: "Respuesta secreta",
                        access_token: "Token de acceso",
                        accessTokenSecret: "Token de acceso secreto",
                        apikey: "Clave Api",
                        phoneNumber: "Número de teléfono",
                        folderPath: "Ruta de la carpeta",
                        namePath: "Nombre de la carpeta",
                        authCode: "Código de autorización",
                        accountName: "Nombre de la cuenta",
                        loginUrl: "URL de acceso",
                        token: "Token",
                        agreement: "Acepto",
                        refreshToken: "Recargar el token",
                        timeout: "Retardo (ms)",
                        branchName: "Oficina",
                        code: "Código confidencial"
                    },
                    placeholder: {
                        password: "La contraseña que usted usa para acceder al servicio",
                        update_password: "Actualizar la contraseña",
                        accountName: "Ejemplo: Cuenta personal",
                        namePath: "Ejemplo: Facturas de Camille. La ruta de nombre predeterminado es su login."
                    },
                    button: {
                        connect: "Conectar",
                        cancel: "Cancelar",
                        save: "Guardar",
                        disconnect: "Desconectar esta cuenta",
                        delete: "Borrar esta cuenta",
                        advanced: "Opciones avanzadas",
                        synchronize: "Sincronizar ahora"
                    }
                },
                folder: {
                    title: "Configuración de carpetas relacionadas",
                    withoutSettings: {
                        title: "Carpeta relacionada"
                    },
                    link: "Abrir la carpeta en Cozy Drive",
                    changePath: "cambiar la ruta de acceso",
                    error: "Oops, algo salió mal. No se asuste, sus archivos siguen ahí, por favor vuelva a intentarlo más tarde.",
                    close: "cerrar",
                    warning: "Usted cambia su ruta de acceso",
                    oldFiles: "Todas sus facturas serán trasladadas a su nueva ruta de acceso",
                    newFiles: "Sus nuevas facturas serán descargadas a su nueva ruta de acceso",
                    newPath: "Todo salió bien, el nuevo camino de acceso para su cuenta %{name} es:",
                    placeholder: {
                        administrative: "Administrativa",
                        photos: "Fotos"
                    }
                },
                success: {
                    title: {
                        connect: "Configuración correcta!",
                        update: "¡Su cuenta %{name} ha sido actualizada!"
                    },
                    banksLinkText: "Ver mis cuentas en %{appName}",
                    driveLinkText: "Abrir la carpeta en Cozy Drive",
                    button: "Cerrar"
                },
                message: {
                    folder: {
                        title: "Carpeta",
                        link: "Abrir la carpeta en Cozy Drive"
                    },
                    success: {
                        connect: "Sus datos estarán disponibles en su Cozy en pocos minutos y a partir de ese momento, los siguientes lo estarán automáticamente.",
                        update: "¡Su cuenta %{name} ha sido actualizada exitosamente.",
                        delete: "Cuenta suprimida exitosamente."
                    },
                    syncing: {
                        bill: "Sus facturas están sincronizándose y estarán disponibles en la siguiente dirección:"
                    },
                    synced: {
                        title: "Sincronización de sus datos",
                        cron: "Frecuencia de sincronización: %{frequency}",
                        cron_hourly: "cada hora",
                        cron_daily: "una vez por día",
                        cron_weekly: "una vez por semana",
                        cron_monthly: "una vez por mes",
                        cron_undefined: "manualmente",
                        syncing: "ejecutándose...",
                        unknown: "desconocido",
                        last_sync: "Última sincronización: **%{date}**",
                        date_format: "MMMM D[,] YYYY [a las] HH[:]mm",
                        bill: "Encuentre sus datos en la aplicación Drive en este sitio:"
                    },
                    error: {
                        server: "Discúlpenos, nuestro servidor tuvo un contratiempo, le importaría arrancar de nuevo?",
                        bad_credentials: "Lo siento, uste ha escrito un login o una contraseña incorrectos.",
                        delete: "Discúlpenos, nuestro servidor tuvo un contratiempo, le importaría arrancar de nuevo?"
                    }
                },
                forceConnection: "Vuelva a ejecutar",
                editor_detail: "Servicio desarrolado por %{editor}"
            },
            account_picker: {
                add_account_button: {
                    label: "Añadir una cuenta"
                }
            },
            apps: {
                title: "Mis apps"
            },
            connection: {
                CTA: {
                    twofa_failed: "Vuelva a ejecutar"
                },
                error: {
                    default: {
                        title: "Ha ocurrido un error",
                        description: "Desafortunadamente, algo salió mal al intentar conectar con %{name}. Por favor, controle otra vez la información de su cuenta, visite nuestra ayuda en línea o contáctenos en contact@cozycloud.cc."
                    },
                    DISK_QUOTA_EXCEEDED: {
                        title: "El amacenamiento de Cozy está lleno",
                        description: 'Este servicio no puede recuperar sus documentos ahora. Por favor, borre algunos archivos o vaya a "Ajustes > Almacenamiento** para obtener más espacio libre.'
                    },
                    CHALLENGE_ASKED: {
                        title: "Se requiere Challenge",
                        description: "Parece que el sitio web requiere un segundo factor de autenticación que aún no está disponible. Puede intentar resolver el problema en el sitio web[%{name}](%{link}) antes de volver a intentarlo."
                    },
                    LOGIN_FAILED: {
                        title: "Malas credenciales",
                        description: "Malas credenciales. Controle los campos de su conector y vuelva a ejecutarlo."
                    },
                    "LOGIN_FAILED.NEEDS_SECRET": {
                        title: "Secreto exigido",
                        description: "Se debe llenar un campo adicional antes de controlar sus credenciales."
                    },
                    "LOGIN_FAILED.TOO_MANY_ATTEMPTS": {
                        title: "Bloqueado temporalmente",
                        description: "Se hicieron demasiados intentos. Por favor, actualice sus credenciales en el sitio web[%{name}](%{link}) y actualice el conector más tarde."
                    },
                    MAINTENANCE: {
                        title: "Sitio web no disponible",
                        description: "Parece que el sitio web [%{name}](%{link}) no está disponible o que el konnector debe actualizarse. Vuelva a ejecutar el conector más tarde o visite nuestra ayuda en línea."
                    },
                    NOT_EXISTING_DIRECTORY: {
                        title: "Falta la carpeta de destino",
                        description: "Parece que la carpeta de destino de esta cuenta ha sido borrada. Por favor desconéctese de la cuenta, restáurela y vuelva a conectarse."
                    },
                    UNKNOWN_ERROR: {
                        title: "Error de conexión",
                        description: "Ha ocurrido un error no identificado."
                    },
                    USER_ACTION_NEEDED: {
                        title: "Acción necesaria con el proveedor",
                        description: "Parece que el sitio web[%{name}](%{link}) requiere que inicie sesión y realice una acción específica. Vuelva a ejecutar el conector una vez que haya resuelto el problema en la página web."
                    },
                    "USER_ACTION_NEEDED.OAUTH_OUTDATED": {
                        title: "Se requiere volver a acceder",
                        description: "El servicio [%{name}](%{link}) requiere que usted vuelva a acceder. Por favor desconecte y reconecte su cuenta %{name} a esta aplicación. No se perderá ningún dato."
                    },
                    "USER_ACTION_NEEDED.ACCOUNT_REMOVED": {
                        title: "Cuenta no disponible",
                        description: "Parece que su cuenta no está activa. Compruebe su cuenta en[%{name}](%{link}) antes de volver a intentarlo."
                    },
                    "USER_ACTION_NEEDED.CHANGE_PASSWORD": {
                        title: "Se requiere actualizar la contraseña",
                        description: "Parece que el sitio web[%{name}](%{link}) requiere que inicie sesión y actualice su contraseña. Por favor, vuelva a ejecutar el conector una vez que haya resuelto el problema en la página web."
                    },
                    "USER_ACTION_NEEDED.PERMISSIONS_CHANGED": {
                        title: "Se necesitan nuevos permisos de validación",
                        description: "Su conector fue actualizado y los permisos cambiados. Por favor, valídelos antes de volver a lanzar el conector."
                    },
                    "USER_ACTION_NEEDED.TWOFA_EXPIRED": {
                        title: "Relanzar la conexión al servicio para recuperar sus datos",
                        description: "La última conexión al servicio ha fallado; por favor, láncela de nuevo. Es posible que tenga que proporcionar un código de validación."
                    },
                    "USER_ACTION_NEEDED.WRONG_TWOFA_CODE": {
                        title: "Código suministrado para dos factores es equivocado",
                        description: "El código para dos factores suministrado esta errado, ensaye de nuevo por favor."
                    },
                    VENDOR_DOWN: {
                        title: "Servicio no disponible",
                        description: "Parece que el servicio[%{name}](%{link}) no está disponible en este momento. Por favor, vuelva a ejecutar el conector más tarde."
                    },
                    "VENDOR_DOWN.BANK_DOWN": {
                        title: "Sitio web no disponible",
                        description: "Parece que el sitio web [%{name}](%{link}) no está disponible en este momento. Por favor, vuelva a ejecutar el conector más tarde."
                    },
                    "VENDOR_DOWN.LINXO_DOWN": {
                        title: "Servicio no disponible",
                        description: "Parece que en este momento estamos experimentando una sobrecarga con nuestros conectores bancarios. Por favor, vuelva a ejecutar el conector más tarde."
                    }
                }
            },
            intent: {
                konnector: {
                    install: {
                        error: {
                            message: "Este conector no se puede instalar"
                        }
                    }
                },
                service: {
                    return: "Volver a la lista de conectores",
                    success: {
                        button: {
                            label: "Cerrar"
                        }
                    },
                    error: {
                        initialization: "El servicio ha fallado al inicializarse. Sentimos los inconvenientes.",
                        creation: "Imposible crear una cuenta, ha ocurrido un error.",
                        cause: "Causa: %{error}"
                    },
                    cancel: "Cancelar",
                    terminate: "Terminar"
                }
            },
            field: {
                password: {
                    visibility: {
                        hide: "Ocultar",
                        show: "Mostrar",
                        title: {
                            hide: "Ocultar la contraseña",
                            show: "Mostrar la contraseña"
                        }
                    }
                }
            },
            nav: {
                services: "Servicios instalados"
            },
            category: {
                all: "Todo",
                banking: "Bancos",
                health: "Salud",
                insurance: "Seguros",
                transport: "Transporte",
                social: "Social",
                isp: "PSI",
                telecom: "Telecom",
                energy: "Energía",
                host_provider: "Huesped",
                productivity: "Productividad",
                shopping: "Compras",
                public_service: "Servicios Públicos",
                other: "Otros"
            },
            loading: {
                initial: "Cargando cuentas...",
                working: "Cargando"
            },
            validation: {
                exact_length: "Debe estar compuesto de %{length} caracteres exactamente.",
                max_length: "La longitud máxima es de %{length}  caracteres.",
                min_length: "Debe contener al menos %{length} caracteres.",
                pattern: "El valor debe coincidir con un patrón específico: %{pattern}.\n"
            },
            update: {
                title: "Está disponible una actualización de este servicio.",
                regular: "Actualice esta versión para seguir obteniendo sus datos y disponer de las últimas mejoras.",
                blocking: "Actualícela para seguir obteniendo sus datos",
                CTA: "Actualizar"
            },
            error: {
                initial: "Algo ocurrió al recolectar sus colectores y sus datos. por favor, vuelva a cargar la página.",
                LOGIN_FAILED: "Malas credenciales. Controle los campos de su conector y vuelva a ejecutarlo.",
                UNKNOWN_ERROR: "Algo inesperado ha ocurrido al ejecutar el conector",
                JOB_TIMEOUT: "La ejecución del conector ha tardado mucho",
                button: {
                    reload: "Volver a cargar la página ahora"
                }
            },
            tutorial: {
                cozy_collect: {
                    title: "Automatice la recolección de sus datos",
                    text: "Ellos serán almacenados en su Cozy, usted no tendrá que buscarlos en parte alguna.",
                    button: "Siguiente"
                },
                home: {
                    apps: {
                        button: "Siguiente",
                        text: "Organice facilmente su vida numérica (archivos, imágenes, cuentas de banco, ...)",
                        title: "Acceda a todas sus aplicaciones Cozy"
                    },
                    services: {
                        button: "Configurar mis cuentas",
                        text: "Ellos serán almacenados en su Cozy, usted no tendrá que buscarlos en parte alguna.",
                        title: "Automatice la recolección de sus datos"
                    }
                },
                menu_apps: {
                    title: "Su Cozy es mucho más que un simple agregador de datos",
                    text: "Abra el menú de Aplicaciones para descubrir las características que Cozy puede ofrecerle.",
                    button: "Descubrir mis aplicaciones"
                }
            },
            maintenance: {
                icon: "Este conector está en mantenimiento",
                service: "Servicio interrumpido",
                problem: "%{konnectorName} no permite que su Cozy acceda a sus datos",
                title: "¿Qué sucede?"
            },
            connector: {
                debug: {
                    successMessage: "Este konnector es sólo para fines de debug, este es un mensaje habitual adicional de éxito."
                },
                empty: {
                    title: "¡Empiece a recopilar sus datos!",
                    text: "Sincronice sus cuentas con su Cozy para recuperar automáticamente sus datos (facturas, reembolsos, gastos...)"
                },
                silenced: '%{name} no se sugerirá más. Siempre puede encontrar un proveedor haciendo clic en el botón "Añadir".',
                noAccount: "Cuenta inexistente",
                add: "Añadir un servicio",
                update: "Actualización disponible",
                logo: {
                    alt: "%{name} logo\n"
                },
                enedis: {
                    description: {
                        service: "Recupere sus datos de Linky conectandose a su cuenta de Enedis. Debe tener un medidor Linky y haber creado antes su cuenta de Enedis [en el sitio web de Enedis] (https://espace-client-connexion.enedis.fr/auth/UI/Login?realm=particuliers). Fing proporciona este conector para el proyecto MesInfos. Recupera los datos de su contrato de electricidad y descarga su consumo de electricidad del día anterior. Este conector se ejecuta en su Cozy y Fing no tendrá acceso a estos datos."
                    }
                },
                orange: {
                    message: {
                        delay: "Una vez conectado, se envía al sistema de información de Orange una solicitud para extraer sus datos. Estos datos son válidos durante 15 días. Sus datos se actualizan automáticamente cada quince días."
                    }
                },
                orangemobile: {
                    description: {
                        connector: "En el contexto de 'MesInfos', Orange le permite localizar permanentemente su teléfono.\n\n**La recopilación de datos exige su acuerdo previo**\n\nHaciendo clic en \"Apruebo\", usted consiente que se recopile la posición de su teléfono, cada 30 minutos. La información recopilada será la siguiente:\nFecha y hora de la ubicación.\nDatos de la ubicación de la antena más cercana en el momento de la recopimación.\nLos datos recopilados por Orange después de su aceptación estarán disponibles sólo en el Cozy que usted ha asignado en el contexto de 'MesInfos'. Se añadirán a sus datos de ubicación almacenados en su registro de llamadas.",
                        service: 'Este conector carga datos de su cuenta Orange a su Cozy. Carga automáticamente los registros de llamadas de su teléfono. Estos registros de llamadas incluyen su número de teléfono, el número de teléfono de su corresponsal, fecha, duración de la llamada  y datos sobre la localización de la antena radio más cercana en el momento de la recopilación.\n\nUsted podrá utilizar esos datos en diferentes aplicaciones de su Cozy, por ejemplo "Mapeando Mi Vida" (pronto disponible en el Cozy Store).',
                        field: {
                            agreement: '¿En el contexto de "Mes infos", aprueba usted que Orange localice regularmente su teléfono ?'
                        }
                    }
                },
                orangevideos: {
                    description: {
                        service: 'Este conector carga datos de su cuenta Orange a su Cozy. Carga automáticamente la lista de las películas que usted ha descargado gratis (TV Replay) o pagando VOD desde em 01/01/2015 (no se incluyen películos con contenido para adultos°.\\n\\nUsted podrá utilizar esos datos en diferentes aplicaciones de su Cozy, por ejemplo "My Movies Music" (pronto disponible en el Cozy Store).'
                    }
                },
                axabanque102: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                banquepopulaire: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                barclays136: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                bforbank97: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                bnpparibas82: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                boursorama83: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                bred: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                caatlantica3: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                caissedepargne1: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                carrefour159: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                casden173: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                cdngroup109: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                cdngroup88: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                cic45: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                cic63: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                comptenickel168: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                creditcooperatif148: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                creditmaritime: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                fortuneo84: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                hellobank145: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                hsbc119: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo).",
                        connector: "La respuesta secreta es [pregunta por HSBC](https://www.hsbc.fr/1/2/hsbc-france/particuliers/connexion) cuando usted se conecta sin doble autenticación. Ejemplo: ¿Cómo se llama su mascota?"
                    }
                },
                ingdirect95: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                labanquepostale44: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl143: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl144: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                lcl146: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                monabanq96: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                },
                societegenerale: {
                    description: {
                        service: "La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."
                    }
                }
            },
            Queue: {
                header: "Sincronizando cuentas",
                header_mobile: "%{done} de %{total}",
                header_done: "Sincronizado %{done}  de %{total}",
                item: {
                    pending: "Pendiente"
                },
                close: "Cerrar"
            },
            services: {
                title: "Servicios instalados"
            },
            status: {
                interrupted: "SEVICIO INTERRUMPIDO",
                edf: {
                    maintenance: "El sistema de información de EDF ha cambiado y el acceso a los datos relacionados no funciona. Este konnector no puede recuperar actualmente sus datos de EDF. Estamos tratando de restaurar la situación y le notificaremos cuando se arregle. [Más información en](%{supportLink})",
                    support_link: "https://support.cozy.io/article/123-le-connecteur-edf-ne-fonctionne-pas"
                }
            },
            tile: {
                konnector: {
                    lastSyncDate: {
                        format: "DD MMM"
                    }
                }
            }
        }
    },
    qgiu: function(e) {
        e.exports = {
            defaultDateFormat: "MM/DD/YYYY",
            defaultTriggerTimeInterval: [0, 5],
            filteredApps: ["home"],
            displayedErrorTypes: ["DISK_QUOTA_EXCEEDED", "CHALLENGE_ASKED", "LOGIN_FAILED", "LOGIN_FAILED.NEEDS_SECRET", "LOGIN_FAILED.TOO_MANY_ATTEMPTS", "NOT_EXISTING_DIRECTORY", "USER_ACTION_NEEDED", "USER_ACTION_NEEDED.OAUTH_OUTDATED", "USER_ACTION_NEEDED.ACCOUNT_REMOVED", "USER_ACTION_NEEDED.CHANGE_PASSWORD", "USER_ACTION_NEEDED.PERMISSIONS_CHANGED", "USER_ACTION_NEEDED.TWOFA_EXPIRED", "USER_ACTION_NEEDED.WRONG_TWOFA_CODE", "USER_ACTION_NEEDED.SCA_REQUIRED", "USER_ACTION_NEEDED.WEBAUTH_REQUIRED"],
            customWallpaperPath: "/Photos/Settings/Wallpaper.jpg"
        }
    },
    rGvZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "c", (function() {
            return s
        }));
        var r = n("m+TH");
        const o = "io.cozy.triggers",
            a = () => r.i("triggers", "konnector"),
            i = (e, t, n = []) => !!e.documents[o] && Object.values(e.documents[o]).filter(e => "konnector" === e.worker && e.message && e.message.konnector === t.slug && e.message.account && n.includes(e.message.account)) || [],
            s = (e, t) => !!e.documents && !!e.documents[o] && e.documents[o][t]
    },
    "sR/t": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "b", (function() {
            return i
        }));
        var r = n("NAv5"),
            o = n.n(r);
        const a = () => {},
            i = (e, t) => e.documents && e.documents["io.cozy.jobs"] && t ? Object.values(e.documents["io.cozy.jobs"]).reduce((e, n) => n.trigger_id !== t._id ? e : e ? o.a.isAfter(n.started_at, e.started_at) ? n : e : n, null) : null
    },
    uZd2: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        })), n.d(t, "f", (function() {
            return s
        })), n.d(t, "d", (function() {
            return c
        })), n.d(t, "c", (function() {
            return u
        })), n.d(t, "b", (function() {
            return l
        })), n.d(t, "e", (function() {
            return d
        }));
        var r = n("m+TH");

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const a = "io.cozy.konnectors",
            i = () => r.h("konnectors"),
            s = e => {
                const t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? Object(arguments[t]) : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e, e.attributes, {
                    id: `${a}/${e.slug}`,
                    _type: a
                });
                return {
                    doctype: a,
                    type: "RECEIVE_NEW_DOCUMENT",
                    response: {
                        data: [t]
                    },
                    updateCollections: ["konnectors"]
                }
            },
            c = (e, t) => !!e.documents && !!e.documents[a] && e.documents[a][`${a}/${t}`],
            u = e => !!e.documents && !!e.documents[a] && Object.values(e.documents[a]),
            l = e => !!e.documents && !!e.documents[a] && Object.keys(e.documents[a]).reduce((t, n) => {
                const r = e.documents[a][n];
                return t[r.slug] = r, t
            }, {}),
            d = e => !!e && !!e.documents && !!e.documents[a] && Object.values(e.documents[a]).map(e => e.slug)
    },
    yMTE: function(e, t, n) {
        var r = {
            "./en": "Us+F",
            "./en/": "Us+F",
            "./en/build_distance_in_words_locale": "LZbM",
            "./en/build_distance_in_words_locale/": "LZbM",
            "./en/build_distance_in_words_locale/index": "LZbM",
            "./en/build_distance_in_words_locale/index.js": "LZbM",
            "./en/build_format_locale": "6DAA",
            "./en/build_format_locale/": "6DAA",
            "./en/build_format_locale/index": "6DAA",
            "./en/build_format_locale/index.js": "6DAA",
            "./en/index": "Us+F",
            "./en/index.d.ts": "DYsx",
            "./en/index.js": "Us+F",
            "./en/package": "EJIZ",
            "./en/package.json": "EJIZ",
            "./es": "/S0t",
            "./es/": "/S0t",
            "./es/build_distance_in_words_locale": "GEfZ",
            "./es/build_distance_in_words_locale/": "GEfZ",
            "./es/build_distance_in_words_locale/index": "GEfZ",
            "./es/build_distance_in_words_locale/index.js": "GEfZ",
            "./es/build_format_locale": "O+zC",
            "./es/build_format_locale/": "O+zC",
            "./es/build_format_locale/index": "O+zC",
            "./es/build_format_locale/index.js": "O+zC",
            "./es/index": "/S0t",
            "./es/index.d.ts": "gbHe",
            "./es/index.js": "/S0t",
            "./es/package": "Vizl",
            "./es/package.json": "Vizl",
            "./fr": "LKA2",
            "./fr/": "LKA2",
            "./fr/build_distance_in_words_locale": "IzMR",
            "./fr/build_distance_in_words_locale/": "IzMR",
            "./fr/build_distance_in_words_locale/index": "IzMR",
            "./fr/build_distance_in_words_locale/index.js": "IzMR",
            "./fr/build_format_locale": "I3Zg",
            "./fr/build_format_locale/": "I3Zg",
            "./fr/build_format_locale/index": "I3Zg",
            "./fr/build_format_locale/index.js": "I3Zg",
            "./fr/index": "LKA2",
            "./fr/index.d.ts": "hE7Q",
            "./fr/index.js": "LKA2",
            "./fr/package": "herc",
            "./fr/package.json": "herc"
        };

        function o(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        o.keys = function() {
            return Object.keys(r)
        }, o.resolve = a, e.exports = o, o.id = "yMTE"
    },
    zEKg: function(e, t) {
        e.exports = "/img/timeline.e2b1b337ef80412481067785036bf455.png"
    }
});