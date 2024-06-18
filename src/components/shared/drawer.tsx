import { Drawer as AntdDrawer, DrawerProps } from "antd";
import { ShareContext } from "components/provider/context";
import { setIsOpenDrawer } from "components/provider/context/shared-reducer";
import { useContext } from "react";

const Drawer: React.FC<DrawerProps> = (props) => {
  const [state, dispatch] = useContext(ShareContext);

  const handleClose: DrawerProps["onClose"] = (e) => {
    props.onClose && props.onClose(e);
    dispatch(setIsOpenDrawer(false));
  };

  return (
    <AntdDrawer {...props} open={state.drawer.open} onClose={handleClose} />
  );
};

export default Drawer;