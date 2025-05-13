import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

function Administration(){
    <div>
        <Header/>
        <Nav/>
        <hr className="hr-line"></hr>
        <h3 className="directions">Администрация</h3>
        
        <div className="form-container">
            <form className="admin-name" action="#" method="post">
                <div className="form-group">
                    <label for="admin">Администратор</label>
                    <input type="text" id="admin" name="admin" className="input-name"> </input>
                </div>
                <div className="form-group">
                    <label for="password">Id пароль</label>
                    <input type="password" id="password" name="password" className="input-name"> </input>
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    </div>
}
export default Administration;