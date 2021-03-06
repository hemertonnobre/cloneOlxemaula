import React, {useState} from 'react';
import { PageArea }  from './styled';

import { PageContainer, PageTitle } from '../../components/MainComponents';

const Page = () => {

    const [email, setEmail] = UseState ('');
    const [password, SetPassword] = useState('');
    const [rememberPassword,SetRememberPassword] = useState('');


    return(
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" />
                        </div>
                    </label> 
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar Senha</div>
                        <div className="area--input">
                            <input type="checkbox"/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button>Login</button>
                        </div>
                    </label>                
                </form>
            </PageArea>
        </PageContainer>

    )
}
export default Page;