const { DoctorListHeader, AddDoctorModal, SpecialistCard } = require("./../components");

const BasePage = require("./base.page");

class DoctorsPage extends BasePage{
    constructor() {
        super("/showcase/angular/appointmentplanner/#/doctors");
        this.AddDoctorModal = new AddDoctorModal();
        this.doctorListHeader = new DoctorListHeader();
    }

    specialistCard(id) {
        return new SpecialistCard(id);
    }
}

module.exports = DoctorsPage;