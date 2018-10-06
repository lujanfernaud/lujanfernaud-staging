module CustomHelpers
  def parameterize(title)
    title.gsub(",", " ").split.join("-").downcase
  end

  def project_link_title(link)
    title = link.title

    if title == "Online"
      "See #{title}"
    else
      "See on #{title}"
    end
  end
end
