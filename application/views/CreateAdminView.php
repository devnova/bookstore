<div class="workSpaceWidth">
    <img src="application/img/add_user.png">
    <div class="h1">Создание администратора системы</div><br>
    Пожалуйста, заполните даные формы: <br><br>
    <form action="/createuser" method="post">
        <table width="100%" cellpadding="2" cellspacing="7" style="font-weight: bold" class="imgVAM">
            <tr>
                <td width="180"><img src="application/img/user.png">ЛОГИН [3-255]:</td>
                <td><input name="login" type="text"></td>
            </tr>
            <tr>
                <td><img src="application/img/lock.png">ПАРОЛЬ [8-255]:</td>
                <td><input name="password" type="password"></td>
            </tr>
            <tr>
                <td><img src="application/img/lock.png">ПОВТОРИТЕ ПАРОЛЬ:</td>
                <td><input name="repeatPassword" type="password"></td>
            </tr>
            <tr>
                <td></td>
                <td><input class="inputBold" value="Создать" style="float: right;" type="submit">
                </td>
            </tr>
        </table>
        <div class="clear"></div>
    </form>
</div>
