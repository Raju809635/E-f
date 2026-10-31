import {NavLink} from 'react-router-dom';
export default function Navbar(){return <header className="nav"><a className="brand" href="/">RETURN<span>IQ</span></a><nav>{[['/','Overview'],['/predict','Predict'],['/analytics','Analytics'],['/about','About']].map(([to,t])=><NavLink key={to} to={to}>{t}</NavLink>)}</nav><span className="status-dot">● API workspace</span></header>}
