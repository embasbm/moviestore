require 'rails_helper'
RSpec.describe Api::V1::CategoriesController, type: :controller do
  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      category = Category.create(name: 'Foo')
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end
end
