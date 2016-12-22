# Copyright (c) 2016-2017 Enclose.IO contributors
# 
# This file is part of Enclose.IO, distributed under the MIT License
# For full terms see the included LICENSE file

class AttachmentUploader < CarrierWave::Uploader::Base
  storage :aws

  def store_dir
    model.project.name
  end
end

