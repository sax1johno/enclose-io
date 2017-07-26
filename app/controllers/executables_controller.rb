class ExecutablesController < ApplicationController
  http_basic_authenticate_with name: ENV['ENCLOSE_IO_SECRET'], password: ENV['ENCLOSE_IO_SECRET']
  skip_before_action :verify_authenticity_token
  
  def index
    @runner = Runner.find_by!(name: params[:runnerId])
    @executable = Executable.where(phase: :pending, arch: params[:arch], os: params[:os]).order('updated_at').first
    if @executable.nil?
      render json: nil
      return
    end
    @executable.runner_id = @runner.id
    @executable.phase = :running
    @executable.save!
    render json: {
      "id" => "#{@executable.id}",
      "status" => "running",
      "bin" => "#{@executable.name}",
      "arch" => "#{@executable.arch}",
      "os" => "#{@executable.os}",
      "package" => "#{@executable.project.token}",
      "project" => @executable.project.as_json,
      "version" => "#{@executable.version}",
      "filename" => "#{@executable.fullname}",
      "createdAt" => "#{@executable.created_at}",
      "startedAt" => "#{@executable.updated_at}",
      "runnerId" => "#{params[:runnerId]}",
      "timeout" => 1800000,
    }
  end
  
  def update
    @executable = Executable.find(params['id'])
    @executable.phase = params[:status]
    @executable.url = params[:url]
    @executable.log = params[:log]
    @executable.save!
    render json: true
  end
end
