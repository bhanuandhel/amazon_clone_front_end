import React from 'react'
import { Link } from 'react-router-dom'

const RegisterView = (props) => {
    const { t, i18n } = props;
    const rtl = (i18n.languages[0] == 'pk' ? 'text-right' : '');
    return (
        <div className="container mb-5">
            <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{ width: "25rem" }}>
                <div className="card-body">
                    <h4 className={`card-title ${rtl}`}>{t('register.title')}</h4>
                    <form onSubmit={props.handleSubmit} className="needs-validation" autoComplete="off" noValidate>
                        <div className="form-group">
                            <label htmlFor="userName">{t('register.lbl_name')} </label>
                            <input
                                type="text"
                                name="username"
                                className={`form-control ${rtl}`}
                                placeholder="Ganguly Tech"
                                id="userName"
                                required
                                minLength="10"
                                value={props.username}
                                onChange={props.handleChange}
                            />
                            <div className="valid-feedback">
                                <i className="far text-success fa-thumbs-up"></i> OK
                            </div>
                            <div className="invalid-feedback">
                                <i className="fas text-danger fa-exclamation-triangle"></i> Some error in your name.
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userEmail">{t('register.lbl_email')} </label>
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${rtl}`}
                                placeholder="abc@abc.com"
                                id="userEmail"
                                aria-describedby="emailHelp"
                                required
                                value={props.email}
                                onChange={props.handleChange}
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
                            <label htmlFor="userPassword">{t('register.lbl_pass1')} </label>
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
                        <div className="form-group">
                            <label htmlFor="userPassword2">{t('register.lbl_pass2')} </label>
                            <input
                                type="password"
                                className={`form-control ${rtl}`}
                                placeholder="******"
                                name="password2"
                                id="userPassword2"
                                aria-describedby="passwordHelp2"
                                required
                                minLength="6"
                                value={props.password2}
                                onChange={props.handleChange}
                            />
                            <small id="passwordHelp2" className="form-text text-muted"><i className="fas text-primary fa-info"></i> Password must match the above.</small>
                            <div className="valid-feedback">
                                <i className="far text-success fa-thumbs-up"></i> OK
                            </div>
                            <div className="invalid-feedback">
                                <i className="fas text-danger fa-exclamation-triangle"></i> Some error in re-type password.
                            </div>
                        </div>
                        <button type="submit" className={`btn btn-warning w-100 shadow btn-sm rounded ${rtl}`}>{t('register.btn_register')}</button>
                    </form>

                    <hr className="hr-text" data-content={t('register.seperator_text')} />

                    <p className="text-center">{t('register.have_account_text')} <Link to="/login">{t('register.btn_signin_text')} <i className="fas fa-caret-right"></i></Link></p>
                    <a href="#" className={`btn btn-outline-success btn-sm w-100 mt-2 ${rtl}`}>
                        <i className="fab fa-google"></i> {t('register.btn_login_google')}
                    </a>
                    <a href="#" className={`btn btn-outline-primary btn-sm w-100 mt-2 ${rtl}`}>
                        <i className="fab fa-facebook-square"></i> {t('register.btn_login_facebook')}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RegisterView
