import { StarOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Item } = Menu;

const HeaderMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedKey = location?.pathname.split("/").find((i) => ["all", "favorites"].includes(i));

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      onSelect={({ key }) => navigate(key)}
      selectedKeys={[selectedKey!]}
    >
      <Item key="all" icon={<UnorderedListOutlined />}>
        All Pokémon
      </Item>
      <Item key="favorites" icon={<StarOutlined />}>
        Favorites Pokémon
      </Item>
    </Menu>
  );
};
export default HeaderMenu;
