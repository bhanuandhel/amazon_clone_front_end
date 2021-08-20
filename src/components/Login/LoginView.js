import React from 'react'
import { Link } from 'react-router-dom'

const LoginView = (props) => {
    const {t, rtl, i18n} = props;
    return (

        <div className="container mb-5">
            <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{ width: "25rem" }}>
                <div className="card-body">
                <h4 className={`card-title ${rtl}`}>{t('login.title')}</h4>
                    <form className="needs-validation" onSubmit={props.handleSubmit} autoComplete="off" noValidate>
                        <div className="form-group">
                            <label htmlFor="userEmail">Email: </label>
                            <input 
                                type="email" 
                                name="email" 
                                className={`form-control ${rtl}`}
                                placeholder="abc@abc.com" 
                                id="userEmail" 
                                aria-describedby="emailHelp" 
                                onChange={props.handleChange} 
                                value={props.email} 
                                // infoText={t('login.email_info')}
                                // lblText={t('login.lbl_email')}
                                i18n={i18n}
                                // t={t}
                                required 
                                />
                            <small id="emailHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> We'll never share your email with anyone else.</small>
                            <div className="valid-feedback">
                                <i className="far text-success fa-thumbs-up"></i> OK
                            </div>
                            <div className="invalid-feedback">
                                <i className="fas text-danger fa-exclamation-triangle"></i> Some error in email.
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userPassword">Password: </label>
                            <input 
                                type="password" 
                                className={`form-control ${rtl}`}
                                placeholder="******" 
                                name="password" 
                                id="userPassword" 
                                aria-describedby="passwordHelp" 
                                required 
                                minLength="6" 
                                value={props.password} 
                                onChange={props.handleChange} 
                                />
                            <small id="passwordHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> Password must be at least 6 characters.</small>
                            <div className="valid-feedback">
                                <i className="far text-success fa-thumbs-up"></i> OK
                            </div>
                            <div className="invalid-feedback">
                                <i className="fas text-danger fa-exclamation-triangle"></i> Some error in password.
                            </div>
                        </div>
                        <button type="submit" className={`btn btn-warning w-100 shadow btn-sm rounded ${rtl}`}>{t('login.btn_signin')}</button>
                    </form>

                    <hr className="hr-text" data-content={t('login.seperator_text')} />

                    <Link to="/register" className={`btn btn-dark btn-sm w-100 mt-2 ${rtl}`}>{t('login.btn_register_text')}</Link>
                    <a href="#" className={`btn btn-outline-success btn-sm w-100 mt-2 ${rtl}`}>
                        <i className="fab fa-google"></i> {t('login.btn_login_google')}
                    </a>
                    <a href="#" className={`btn btn-outline-primary btn-sm w-100 mt-2 ${rtl}`}>
                        <i className="fab fa-facebook-square"></i> {t('login.btn_login_facebook')}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LoginView
