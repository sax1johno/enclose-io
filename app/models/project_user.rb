# Copyright (c) 2016-2017 Enclose.IO contributors
# 
# This file is part of Enclose.IO, distributed under the MIT License
# For full terms see the included LICENSE file

class ProjectUser < ApplicationRecord
  belongs_to :project
  belongs_to :user

  after_create do
    project.check if project.reload.project_users.count > 1
  end
  
  after_destroy do
    project.destroy if 0 == project.reload.project_users.count
  end
end
