# Copyright (c) 2016-2017 Enclose.IO contributors
# 
# This file is part of Enclose.IO, distributed under the MIT License
# For full terms see the included LICENSE file

class LibsquashController < ApplicationController
  def index
    @no_header = true
    @subtitle = 'Libsquash'
  end
end
