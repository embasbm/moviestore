require 'rails_helper'
RSpec.describe Api::V1::MoviesController, type: :controller do

  let(:valid_attributes) {
    {
      title: Faker::Lorem.sentence,
      text: Faker::Lorem.paragraph
    }
  }

  let(:invalid_attributes) {
    {
      title: '', text: nil
    }
  }

  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      movie = Movie.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      movie = Movie.create! valid_attributes
      get :show, params: {id: movie.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Movie" do
        expect {
          post :create, params: {movie: valid_attributes}, session: valid_session
        }.to change(Movie, :count).by(1)
      end

      it "renders a JSON response with the new movie" do

        post :create, params: {movie: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(api_v1_movie_url(Movie.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new movie" do

        post :create, params: {movie: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        {
          title: Faker::Lorem.sentence,
          text: Faker::Lorem.paragraph
        }
      }

      it "updates the requested movie" do
        movie = Movie.create! valid_attributes
        put :update, params: {id: movie.to_param, movie: new_attributes}, session: valid_session
        movie.reload
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end

      it "renders a JSON response with the movie" do
        movie = Movie.create! valid_attributes

        put :update, params: {id: movie.to_param, movie: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the movie" do
        movie = Movie.create! valid_attributes

        put :update, params: {id: movie.to_param, movie: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested movie" do
      movie = Movie.create! valid_attributes
      expect {
        delete :destroy, params: {id: movie.to_param}, session: valid_session
      }.to change(Movie, :count).by(-1)
    end
  end

end
