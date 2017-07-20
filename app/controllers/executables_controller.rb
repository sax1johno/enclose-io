class ExecutablesController < ApplicationController
  def index
    @runner = Runner.find_by!(name: params[:runnerId])

  end
end
