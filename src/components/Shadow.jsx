import { closeMenues } from "../redux/opens.js";
import { ShadowOverlay } from "../styles/generalStyles.js";
import { useDispatch, useSelector } from "react-redux";

const Shadow = () => {
  const menuOpen = useSelector((state) => state.toggleMenues.hamburger);
  const cartOpen = useSelector((state) => state.toggleMenues.cart);
  const searchOpen = useSelector((state) => state.toggleMenues.search);
  const filtersOpen = useSelector((state) => state.toggleMenues.filters);
  const sortOpen = useSelector((state) => state.toggleMenues.sort);
  const dispatch = useDispatch();
  return (
    <>
      {cartOpen && (
        <ShadowOverlay
          menuOpen={menuOpen}
          onClick={() => dispatch(closeMenues())}
        />
      )}
      {searchOpen && (
        <ShadowOverlay
          searchOpen={searchOpen}
          onClick={() => dispatch(closeMenues())}
        />
      )}
      {menuOpen && (
        <ShadowOverlay
          menuOpen={menuOpen}
          onClick={() => dispatch(closeMenues())}
        />
      )}
      {filtersOpen && (
        <ShadowOverlay
          filtersOpen={filtersOpen}
          onClick={() => dispatch(closeMenues())}
        />
      )}
      {sortOpen && (
        <ShadowOverlay
          sortOpen={sortOpen}
          onClick={() => dispatch(closeMenues())}
        />
      )}
    </>
  );
};

export default Shadow;
