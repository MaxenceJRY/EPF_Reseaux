import Nav from '../home/header';
import Foot from '../home/footer';
import Actu from './Actu';
import DescriptionAsso from './Description-asso';
import descriptionEquipe from './description-equipe';
import prefooter from './prefooter';
import bandeau from './bandeau';

export default () => (`
<header>
  ${Nav()}
</header>
<main class="mb-2">
  ${bandeau()}
  <div class="container-fluid text-center">
  <div class="row">
      <div class="col-8 mt-3">
          <div class="my-3">
              <h3>Fil des actus</h3>
          </div>
          <div class="card text-center mb-2 nav-filtre-actu asso_admin">
        ${Actu()}
        ${Actu()}
        ${Actu()}
        ${Actu()}
        ${Actu()}
        ${Actu()}
        </div>
        </div>
        <div class="col-4 mt-5 d-grid gap-2">
            ${DescriptionAsso()}
            ${descriptionEquipe()}
          </div>
        </div>
      </div>
        ${prefooter()}
</main>
<footer>
  ${Foot()}
</footer>
  `);
