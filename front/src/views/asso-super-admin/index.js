import post from './post';
import descriptionAsso from './Description-asso';
import descriptionEquipe from './description-equipe';
import contacts from './prefooter';
import assocBanner from './assoc-banner';
import createActu from './stream';

export default (data) => {
  const {
    assoc, usersPermissions, news
  } = data;

  return (`
    ${assocBanner(assoc, usersPermissions.founder)}
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-8 mt-3">
          ${createActu(usersPermissions.founder)}
          <div class="card text-center mb-2 nav-filtre-actu asso_admin">
            ${news.map((actu) => post(actu, usersPermissions.founder)).join('')}
          </div>
        </div>
        <div class="col-4 mt-5 d-grid gap-2">
          ${descriptionAsso(assoc, usersPermissions.founder)}
          ${descriptionEquipe(assoc, usersPermissions.founder)}
        </div>
      </div>
    </div>
    ${contacts(assoc, usersPermissions.founder)}  
  `);
};
