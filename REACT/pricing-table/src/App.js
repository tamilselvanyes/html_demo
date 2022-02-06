import './App.css';


export default function App() {
  //Array of objects for pricing schemes
  const packages = [{
    name_user: " FREE",
    price: "$0",
    users: "Single User",
    storage: "5GB Storage",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    private_projects_value: false,
    support: "Dedicated Phone Support",
    support_value: false,
    domain: "Free Subdomain",
    domain_value: false,
    report: "Monthly Status Reports",
    report_value: false
  },
  {
    name_user: " PLUS",
    price: "$9",
    users: "5 Users",
    storage: "50GB Storage",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    private_projects_value: true,
    support: "Dedicated Phone Support",
    support_value: true,
    domain: "Free Subdomain",
    domain_value: true,
    report: "Monthly Status Reports",
    report_value: false
  },
  {
    name_user: "PRO",
    price: "$49",
    users: "Unlimited User",
    storage: "150GB Storage",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    private_projects_value: true,
    support: "Dedicated Phone Support",
    support_value: true,
    domain: "Unlimited Free Subdomain",
    domain_value: true,
    report: "Monthly Status Reports",
    report_value: true
  }
  ]

  return (
    <div className="App">

      <h1>Pricing Chart Using React</h1>
      {/* Calling the function to display along with the props */}
      {packages.map((user, index) => <ShowPricing key={index}
        name={user.name_user}
        price={user.price}
        users={user.users}
        storage={user.storage}
        public_projects={user.public_projects}
        access={user.access}
        private_projects={user.private_projects}
        private_projects_value={user.private_projects_value}
        support={user.support}
        support_value={user.support_value}
        domain={user.domain}
        domain_value={user.domain_value}
        report={user.report}
        report_value={user.report_value}

      />)}

    </div>
  );
}

//function object destructing...
function ShowPricing({ name,
  price,
  users,
  storage,
  public_projects,
  access,
  private_projects,
  private_projects_value,
  support,
  support_value,
  domain,
  domain_value,
  report,
  report_value
}) {

  const subscript = "/month";
  return (
    <div className="chart">
      <h5 className="card-title text-muted text-uppercase">{name}</h5>
      <p className="price">{price}<sub className="subscript">{subscript}</sub></p>
      <ul className="fa-ul">
        {users === "Single User" ? <li><span className="fa-li"><i className="fas fa-check"></i></span>{users}</li> :
          <li><span className="fa-li"><i className="fas fa-check"></i></span><b>{users}</b></li>
        }
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{storage}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{public_projects}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{access}</li>

        {/* handling the tick and cross icon with grey and black text by conditional operator or ternary operator */}
        {
          private_projects_value === true ? <li><span className="fa-li"><i className="fas fa-check"></i></span>{private_projects}</li> :
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{private_projects}</li>
        }

        {
          support_value === true ? <li><span className="fa-li"><i className="fas fa-check"></i></span>{support}</li> :
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{support}</li>
        }

        {
          domain_value === true ? <li><span className="fa-li"><i className="fas fa-check"></i></span>{domain}</li> :
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{domain}</li>
        }

        {
          report_value === true ? <li><span className="fa-li"><i className="fas fa-check"></i></span>{report}</li> :
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{report}</li>
        }

      </ul>
      <div className="button">
        <button className="btn btn-primary">Select Plan</button>
      </div>
    </div>
  )
}


