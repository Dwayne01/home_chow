export type PaymentType = {
	Icon?: any;
	cardName: string;
	cardNumber: string;
	expiryDate: string;
	certificateAuthority: string;
	cvv: string;
};

export type OrderType = {
	items: any[];
	subtotal: number;
	tax: number;
	deliveryFee: number;
	total: number;
};

export type CurrentStepType = {
	status: number;
};

export type CustomerAddressType = {
	address: string;
	city: string;
	state: string;
	zip: string;
};

export type OrderContextType = {
	order: OrderType;
	currentStep: CurrentStepType;
	payment: PaymentType;
	customerAddress: CustomerAddressType;
	setPayment: (payment: PaymentType) => void;
	setOrder: (order: OrderType) => void;
	setCurrentStep: (status: CurrentStepType) => void;
	setCustomerAddress: (customerAddress: CustomerAddressType) => void;
};
