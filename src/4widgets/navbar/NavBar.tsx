import {Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import cl from "./NavBar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChess} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <div className={`${cl.navbar}`}>
            <div className={`${cl.navbar__content}`}>
                <div >
                    <Link to="/"
                          className={`${cl.navbar__logo}`}>
                        <FontAwesomeIcon icon={faChess}
                                         size="xs"/>
                        <span>ChessGame</span>
                    </Link>
                </div>
                <div className={`${cl.navbar__btns}`}>
                    <Link to="/chess">
                        <Button colorScheme='teal'>
                            К игре
                        </Button>
                    </Link>
                    <Link to="/chess">
                        <Button colorScheme='teal'>
                            Профиль
                        </Button>
                    </Link>
                    <Link to="/chess">
                        <Button colorScheme='teal'>
                            Выйти
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;