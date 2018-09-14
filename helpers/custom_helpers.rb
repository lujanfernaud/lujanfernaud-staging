module CustomHelpers
  def parameterize(title)
    title.gsub(",", " ").split.join("-").downcase
  end
end
