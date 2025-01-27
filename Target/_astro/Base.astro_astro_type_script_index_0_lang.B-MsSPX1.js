const f = "modulepreload",
	h = function (o) {
		return "/" + o;
	},
	l = {},
	y = function (u, s, E) {
		let a = Promise.resolve();
		if (s && s.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				e = r?.nonce || r?.getAttribute("nonce");
			a = Promise.allSettled(
				s.map((t) => {
					if (((t = h(t)), t in l)) return;
					l[t] = !0;
					const i = t.endsWith(".css"),
						d = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${d}`)) return;
					const n = document.createElement("link");
					if (
						((n.rel = i ? "stylesheet" : f),
						i || (n.as = "script"),
						(n.crossOrigin = ""),
						(n.href = t),
						e && n.setAttribute("nonce", e),
						document.head.appendChild(n),
						i)
					)
						return new Promise((m, p) => {
							n.addEventListener("load", m),
								n.addEventListener("error", () =>
									p(
										new Error(
											`Unable to preload CSS for ${t}`,
										),
									),
								);
						});
				}),
			);
		}
		function c(r) {
			const e = new Event("vite:preloadError", { cancelable: !0 });
			if (((e.payload = r), window.dispatchEvent(e), !e.defaultPrevented))
				throw r;
		}
		return a.then((r) => {
			for (const e of r || []) e.status === "rejected" && c(e.reason);
			return u().catch(c);
		});
	};
(
	await y(async () => {
		const { initializeApp: o } = await import("./index.esm.CO2q-MwU.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyAkevZLi2u7BNRBxvnwYTTgRbpbQYWjGL8",
	authDomain: "playform-cloud.firebaseapp.com",
	projectId: "playform-cloud",
	storageBucket: "playform-cloud.appspot.com",
	messagingSenderId: "541150662775",
	appId: "1:541150662775:web:574599325594e05ae7f672",
	measurementId: "G-RFLGQF2GPJ",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.B-MsSPX1.js.map
