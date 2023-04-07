import Image from "next/image";
import CartEmpty from "../../../public/assets/svg/CartEmpty.svg";
import Cross from "../../../public/assets/svg/Cross.svg";

type CartItem = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

type Props = {
	items: CartItem[];
	onAddToCart: () => void;
	onRemoveFromCart: (id: number) => void;
};

const Cart = ({ items, onAddToCart, onRemoveFromCart }: Props) => {
	const subtotal = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<div>
			{items.length === 0 ? (
				<div className="max-w-[376px] h-[345px] border rounded-lg flex flex-col justify-evenly">
					<Image src={CartEmpty} alt="cart empty image" className="mx-auto" />
					<div className="text-center mx-9">
						<h2 className="text-lg font-medium mb-2">No cart items yet!</h2>
						<p className="text-font-light mb-4">
							Start adding items to your menu to build your order.
						</p>
					</div>
					<button
						onClick={onAddToCart}
						disabled
						className="bg-primary-color-deactivated text-white mx-11 py-2 rounded-md"
					>
						Add to cart
					</button>
				</div>
			) : (
				<div className="min-w-[200px] max-w-[376px] border rounded-lg flex flex-col">
					<h2 className="text-xl font-bold mx-11 mt-6">Your order</h2>
					{items.map((item) => (
						<div
							key={item.id}
							className="flex justify-between flex-wrap items-center mx-11"
						>
							<div className="">
								<span className="font-medium mr-3 md:mr-8">
									{item.quantity}
								</span>
								<span>{item.name}</span>
							</div>
							<div className="flex items-center">
								<span className="">
									${(item.price * item.quantity).toFixed(2)}
								</span>
								<button onClick={() => onRemoveFromCart(item.id)}>
									<Image
										src={Cross}
										alt="cross icon"
										className="w-[40px] h-[40px]"
									/>
								</button>
							</div>
						</div>
					))}
					<hr className="mt-11 mb-3" />
					<div className="checkout justify-end mx-11">
						<div className="flex flex-wrap justify-between items-center mb-9">
							<b>Food &amp; Beverages Subtotal</b>
							<span className="font-medium">${subtotal.toFixed(2)}</span>
						</div>
						<button className="bg-primary-color text-white px-4 py-2 mb-4 rounded-md w-[100%]">
							Checkout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
