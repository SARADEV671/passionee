import React, { useState } from 'react';
import './ReservationForm.css'; // Import du fichier CSS

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    reservationType: 'Dine-In',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi de formulaire ou autres actions
    console.log(formData);
    alert('Réservation confirmée');
  };

  return (
    <div className="reservation-container">
      <h2 className="text-center my-4">Formulaire de Réservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            {/* Nom */}
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            {/* Date */}
            <div className="col-md-6 mb-3">
              <label htmlFor="date" className="form-label">
                Date de Réservation
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Heure */}
            <div className="col-md-6 mb-3">
              <label htmlFor="time" className="form-label">
                Heure de Réservation
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="form-control"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            {/* Nombre de personnes */}
            <div className="col-md-6 mb-3">
              <label htmlFor="guests" className="form-label">
                Nombre de personnes
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                className="form-control"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            {/* Type de réservation */}
            <div className="col-md-6 mb-3">
              <label htmlFor="reservationType" className="form-label">
                Type de Réservation
              </label>
              <select
                id="reservationType"
                name="reservationType"
                className="form-select"
                value={formData.reservationType}
                onChange={handleChange}
                required
              >
                <option value="Dine-In">Sur place</option>
                <option value="Takeaway">À emporter</option>
                <option value="Delivery">Livraison</option>
              </select>
            </div>
          </div>

          {/* Message ou demande spéciale */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message / Demande spéciale
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Bouton de soumission */}
          <div className="text-center">
            <button type="submit" className="btn btn-dark">
              Réserver maintenant
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;