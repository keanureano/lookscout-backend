import { logoUrl } from "../services/apiService";
function CompanyLogo() {
  return (
    <div className="CompanyLogo">
      <img src={logoUrl} width={40} height={40} alt="logo" />
      <p>Lookscout</p>
    </div>
  );
}

export default CompanyLogo;
