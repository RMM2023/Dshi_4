import React from 'react';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';

function Administration(){
    <div>
        <Header/>
        <Nav/>
        <h3 class="directions">Администрация</h3>
        
        <div class="form-container">
            <form class="admin-name" action="#" method="post">
                <div class="form-group">
                    <label for="admin">Администратор</label>
                    <input type="text" id="admin" name="admin" class="input-name"> </input>
                </div>
                <div class="form-group">
                    <label for="password">Id пароль</label>
                    <input type="password" id="password" name="password" class="input-name"> </input>
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    </div>
}
export default Administration;