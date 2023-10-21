"use client";

import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import useLocalStorage from "../../hooks/useLocalStorage";
import useUserStore from "../../stores/user";

const Header = () => {
  const { push } = useRouter();
  const { remove } = useLocalStorage();
  const { name, token, clearUserData } = useUserStore();

  const handleLogout = () => {
    clearUserData();
    remove("user");
    push("/login");
  };

  if (!token) return;

  return (
    <header className='px-8 flex justify-between items-center w-full bg-cyan-500 h-20'>
      <div className='flex items-center text-center justify-center w-full'>
        <h5 className='text-xl md:text-4xl font-bold w-5/6 text-white uppercase'>Logo aqui</h5>
      </div>

      <div className='flex md:absolute md:right-24 lg:right-14 xl:right-0 items-center w-2/12'>
        <div className='items-center gap-4 hidden md:flex'>
          <Avatar src='' size={{ base: "xs", md: "sm" }} />
          <span className='text-white'>{name}</span>
        </div>

        <div className='block md:hidden'>
          <Avatar src='' size={{ base: "xs", md: "sm" }} />
        </div>

        <Menu>
          <MenuButton
            as={Button}
            background='none'
            _hover={{}}
            _active={{}}
            rightIcon={<ChevronDown color='#fff' size='2rem' />}
          />

          <MenuList background='cyan.400' outline='none' border='none'>
            <ul className='list-none'>
              <MenuItem
                onClick={() => push("/profile")}
                color='white'
                _hover={{ background: "cyan.500", cursor: "pointer" }}
                _active={{ background: "cyan.500", cursor: "pointer" }}
                background='none'
                as='li'
              >
                Perfil
              </MenuItem>
              <MenuItem
                onClick={() => push("/profile/configurations")}
                color='white'
                _hover={{ background: "cyan.500", cursor: "pointer" }}
                _active={{ background: "cyan.500", cursor: "pointer" }}
                background='none'
                as='li'
              >
                Configurações
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                color='white'
                _hover={{ background: "cyan.500", cursor: "pointer" }}
                _active={{ background: "cyan.500", cursor: "pointer" }}
                background='none'
                as='li'
              >
                Sair
              </MenuItem>
            </ul>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
