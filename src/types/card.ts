export type CardNetwork = "visa" | "mastercard" | "amex" | "discover" | "diners" | "rupay" | "other";
export type CardElement = "number" | "expiry" | "cardholder";

export type CardDetails = {
	number: string;
	expiry: string;
	cardholder: string;
	network: CardNetwork;
};

export type FormattedCardDetails = {
	number: string;
	expiry: string;
	cardholder: string;
};

export type CardTheme =
	| "sky"
	| "pink"
	| "red"
	| "cyan"
	| "yellow"
	| "blue"
	| "green"
	| "emerald"
	| "fuchsia"
	| "purple"
	| "violet"
	| "indigo"
	| "orange"
	| "teal"
	| "rose";
