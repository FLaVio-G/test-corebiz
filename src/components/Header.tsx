import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartCount } = useCart();
  return (
    <div className="flex h-20 flex-row items-center justify-center bg-white px-4 sm:px-8">
      <div className="mr-16 sm:mr-32">
        <img
          src="/logoCoreBlack.svg"
          alt="Example Icon"
          className="h-[2.56rem] w-[11.31rem]"
        />
      </div>
      <label className="flex h-[1.44rem] w-full max-w-[45rem] items-center gap-2 border-b border-gray-400 bg-white">
        <input
          type="text"
          className="w-full bg-transparent text-sm outline-none"
          placeholder="O que você está procurando"
        />
        <img
          src="/magnifying-glass1.svg"
          alt="Search Icon"
          className="h-[1.125rem] w-[1.125rem]"
        />
      </label>
      <div className="ml-6 flex items-center space-x-4 sm:ml-10">
        <div className="flex items-center">
          <img
            src="/user 1.svg"
            alt="User Icon"
            className="h-[1.125rem] w-[1.125rem]"
          />
          <p className="ml-1 text-sm">Minha Conta</p>
        </div>
        <div className="relative flex items-center">
          <img
            src="/shopping-cart 1.svg"
            alt="Shopping Cart Icon"
            className="h-[1.125rem] w-[1.125rem]"
          />
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
