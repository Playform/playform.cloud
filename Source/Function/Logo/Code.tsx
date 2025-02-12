import "@Function/Logo/Stylesheet.scss";

import type { JSX } from "solid-js";

export default ({
	Text = "",
	Font = 1,
	Matrix = {},
}: {
	Text?: string;
	Font?: number;
	Matrix?: Record<string, number[][]>;
}): JSX.Element => {
	const [Offset, _Offset] = createSignal(0);

	const [Element, _Element] = createSignal<HTMLDivElement>();

	const [Count, _Count] = createSignal(10);

	const Width = 4;

	const [_Text] = createSignal(Text);

	const Padded = (): string => `${_Text()}   ${_Text()}   `;

	const Animate = (): boolean => _Text().length > Count();

	const [LastTimestamp, _LastTimestamp] = createSignal(0);

	const Time = 50;

	onMount(() => {
		const Factor = (): void => {
			if (Element()) {
				_Count(
					Math.max(
						1,
						Math.floor((Element()?.offsetWidth ?? 100) / 32),
					),
				);
			}
		};

		Factor();

		window.addEventListener("resize", Factor);

		return (): void => window.removeEventListener("resize", Factor);
	});

	createEffect(() => {
		if (!Animate()) {
			return;
		}

		let ID: number;

		const Size = Padded().length * Width;

		const Roll = (Current: number): void => {
			const Past = Current - LastTimestamp();

			if (Past >= Time) {
				_Offset((prev) => (prev - 0.2 + Size) % Size);

				_LastTimestamp(Current);
			}

			ID = requestAnimationFrame(Roll);
		};

		ID = requestAnimationFrame(Roll);

		return (): void => cancelAnimationFrame(ID);
	});

	const Display = (): string => {
		if (!Animate()) {
			return _Text().slice(0, Count());
		}

		const Start = Math.floor(
			(((Offset() / 2) % Padded().length) * Width) / Width,
		);

		return (
			Padded().slice(Start, Start + Count()) +
			Padded().slice(0, Math.max(0, Start + Count() - Padded().length))
		);
	};

	return (
		<div class="w-full overflow-hidden p-2" ref={_Element}>
			<p class="sr-only">{_Text()}</p>
			<div class="flex justify-center" aria-hidden="true">
				{Display()
					.split("")
					.map((Visible, IndexChar) => (
						<div class="mr-2">
							{((Position) => (
								<div class="Grid">
									{(
										Matrix[Position.toUpperCase()] ||
										Matrix[" "]
									)?.map(
										(Row: number[], IndexRow: number) => (
											<div class="Row flex">
												{Row.map((Pixel, IndexPixel) =>
													((Show) => (
														<div
															class={`Pixel h-${Font} w-${Font} ${
																Show
																	? `Color ${
																			(IndexChar +
																				IndexRow +
																				IndexPixel) %
																				2 ===
																			0
																				? "Left"
																				: "Right"
																		}`
																	: "bg-transparent"
															} `}
															style={
																Show
																	? `animation-delay: ${
																			IndexChar *
																				0.1 +
																			IndexRow *
																				0.05 +
																			IndexPixel *
																				0.02
																		}s;`
																	: ""
															}
														/>
													))(Pixel),
												)}
											</div>
										),
									)}
								</div>
							))(Visible)}
						</div>
					))}
			</div>
		</div>
	);
};

export const { createEffect, createSignal, onMount } = await import("solid-js");
