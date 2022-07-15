import { useState, useEffect } from 'react';
import Head from "next/head";
import { Provider } from 'react-redux';
import styles from "../styles/Home.module.css";
import { products } from "../mocks/data";
import ShoppingCounter from "../components/ShoppingCounter";
import ProductItem from "../components/ProductItem";
import { userService } from 'services';

export default Home;

function Home() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    return (
        <div className="card mt-4">
            <h4 className="card-header">Prueba login con jwt Carvajal</h4>
            <div className="card-body">
                <h6>Usuarios matriculados en archivo json de prueba</h6>

                {users.map(user =>
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                )}

                <main className={styles.main}>
                    <h6 className={styles.title}> Listado de Productos</h6>
                    <div className={styles.grid}>

                    </div>
                </main>

            </div>
            <div>
                
            </div>
            <footer className={styles.footer}>
                <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                Carvajal Test{" "}
                </a>
            </footer>
        </div>
    );
}
