"use client";

import store from "@/state/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import EventListener from "./eventListener";

interface ProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<ThemeProvider enableSystem attribute="class">
			<Provider store={store}>
				<EventListener>{children}</EventListener>
			</Provider>
		</ThemeProvider>
	);
}
