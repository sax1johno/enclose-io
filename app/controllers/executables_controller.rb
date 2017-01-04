# Copyright (c) 2016-2017 Minqi Pan <pmq2001@gmail.com>
# 
# This file is part of Enclose.IO, distributed under the MIT License
# For full terms see the included LICENSE file

class ExecutablesController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @project.check
    redirect_to @project, notice: 'Releases was successfully checked.'
  end
end
