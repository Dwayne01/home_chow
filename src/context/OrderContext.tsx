import React, { createContext, useContext, useMemo, useState } from "react";
import {
	OrderType,
	OrderContextType,
	CurrentStepType,
	PaymentType,
	CustomerAddressType,
} from "../types/orderContextTypes";

const OrderContext = createContext<OrderContextType>({
	order: { items: [], subtotal: 0, tax: 0, deliveryFee: 0, total: 0 },
	currentStep: { status: 0 },
	customerAddress: { address: "", city: "", state: "", zip: "" },
	payment: {
		cardName: "",
		cardNumber: "",
		expiryDate: "",
		cvv: "",
		certificateAuthority: "",
	},
	setPayment: () => {},
	setOrder: () => {},
	setCurrentStep: () => {},
	setCustomerAddress: () => {},
});

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider = ({
	children,
	ItemsSummary,
}: {
	children: React.ReactNode;
	ItemsSummary: any[];
}) => {
	const [items, setItems] = useState<any[]>(ItemsSummary);

	const [order, setOrder] = useState<OrderType>({
		items: ItemsSummary,
		subtotal: 0,
		tax: 0,
		deliveryFee: 0,
		total: 0,
	});
	const [currentStep, setCurrentStep] = useState<CurrentStepType>({
		status: 0,
	});
	const [payment, setPayment] = useState<PaymentType>({
		cardName: "Visa",
		certificateAuthority: "Visa",
		cardNumber: "1234567890123456",
		expiryDate: "1224",
		cvv: "344",
	});
	const [customerAddress, setCustomerAddress] = useState<CustomerAddressType>({
		address: "3122 E Broadway",
		city: "Vancouver",
		state: "BC",
		zip: "V5Q 1X1",
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function calculateTotal() {
		const subtotal = order.items.reduce(
			(acc: number, item: any) => acc + item.price * item.quantity,
			0
		);
		const tax = subtotal * 0.12;
		const deliveryFee = 5;
		const total = subtotal + tax + deliveryFee;
		setOrder({
			...order,
			subtotal,
			tax,
			deliveryFee,
			total,
		});
	}

	React.useEffect(() => {
		calculateTotal();
		// eslint-disable-next-line react-hooks/exhaustive-deps

		// later when apis are ready, we can use this to update the order
	}, [calculateTotal, items]);

	const value = useMemo(
		() => ({
			items,
			order,
			currentStep,
			payment,
			customerAddress,
			setItems,
			setOrder,
			setCurrentStep,
			setPayment,
			setCustomerAddress,
		}),
		[items, order, currentStep, payment, customerAddress]
	);

	return (
		<OrderContext.Provider value={value}>{children}</OrderContext.Provider>
	);
};
